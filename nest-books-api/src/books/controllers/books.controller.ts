
import {  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put  } from "@nestjs/common";
import { Book } from "src/models/books.module";


@Controller('/api/books')
export class BooksController{

    @Get()
    async getAllBooks(){
        return await Book.findAll();
    }

    @Post() 
    async addBook(@Body() book:any){
 
        const result =await Book.create(book);
        return result;

    }

    @Put("/:id")
    async updateBook(@Param('id') id:string, @Body() obj:any){
        const result=await Book.update({...obj},{where:{id:id}});
        return result
    }

    @Delete('/:id')
    async deleteBook(@Param('id') id:string){
        const result= await Book.destroy({where: {id: id}});
        return {
            status: 'success',
            message: 'Operation completed successfully!',
            data: { result },
          };
    } 

    @Get('/:id')
    async getById(@Param('id') id:string) {
        return await Book.findOne({where:{id:id}}); 
    }
    

}