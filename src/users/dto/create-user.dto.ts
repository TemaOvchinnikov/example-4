import {
  IsEmail,
  IsNotEmpty,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  firstName: String;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  lastName: String;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  password: String;
}
