import { IsInt, IsString } from "class-validator";

export class CreatePostDto {
    @IsInt()
    id: number;

    @IsString()
    title: string
}
