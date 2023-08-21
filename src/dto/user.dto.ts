import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class SignUpUserDTO {
    @IsString({
        message: "All fields are required!",
    })
    @IsNotEmpty({
        message: "All fields are required!",
    })
    username: string;

    @IsUrl()
    @IsNotEmpty({
        message: "All fields are required!",
    })
    avatar: string;
}