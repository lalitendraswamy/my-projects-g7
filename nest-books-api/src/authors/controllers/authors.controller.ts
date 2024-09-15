import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Author } from 'src/models/author.model';


@Controller('/api/authors')
export class AuthorsController {

    @Get()
    async getAllAuthor() {
        return await Author.findAll(); 
    }

    @Post()
    async addAuthor(@Body() author:any){
 
        const result =await Author.create(author);
        return result;

    }

    @Put("/:id")
    async updateAuthor(@Param('id') id:string, @Body() obj:any){
        const result=await Author.update({...obj},{where:{id:id}});
        return result
    }

    @Delete('/:id')
    async deleteAuthor(@Param('id') id:string){
        const result= await Author.destroy({where: {id: id}});
        return {
            status: 'success',
            message: 'Operation completed successfully!',
            data: { result },
          };
    } 

    @Get('/:id')
    async getById(@Param('id') id:string) {
        return await Author.findOne({where:{id:id}}); 
    }

    @Get('/:author')
    async getByAuthor(@Param('author') author:string) {
        return await Author.findOne({where:{name:author}}); 
    }

}
