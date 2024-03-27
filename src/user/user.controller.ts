import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express'
@Controller('user')
export class UserController {
	@UseGuards(AuthGuard('user'))
	@Get('me')
	me(@Req() req:Request){
		console.log(req.user)
		return req.user
	}
}