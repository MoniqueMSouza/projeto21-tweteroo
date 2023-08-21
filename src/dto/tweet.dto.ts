import { IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDTO {
    @IsString({
        message: "All fields are required!",
    })
    @IsNotEmpty({
        message: "All fields are required!",
    })
    username: string;

    @IsString({
        message: "All fields are required!",
    })
    @IsNotEmpty({
        message: "All fields are required!",
    })
    tweet: string;
}