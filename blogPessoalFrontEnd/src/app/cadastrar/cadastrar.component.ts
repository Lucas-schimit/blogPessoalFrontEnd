import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  User: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)

  }

  confirmSenha(event:  any){
    this.confirmSenha = event.targe.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.targe.value
  }

  cadastra(){
    this.User.tipo = this.tipoUsuario

    if(this.User.senha != this.confirmSenha){
      alert('A senhas estão incorretas.')
    } else{
      this.authService.cadastrar(this.User).subscribe((resp: User) =>{
        this.User = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }
}
