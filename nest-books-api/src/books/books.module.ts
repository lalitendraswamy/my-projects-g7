import { Module } from "@nestjs/common";
import { BooksController } from "./controllers/books.controller";

@Module({
    controllers:[BooksController]
})

export class BooksModule {}