import { IsInt } from "class-validator";

export class CreatePostDto {
    @IsInt()
    id: number;

    
}
