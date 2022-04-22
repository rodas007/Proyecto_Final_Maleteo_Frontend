import React from 'react'
import "./LoginPage.scss";
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import { SocialMediaComponent } from '../../components/SocialMediaComponent/SocialMediaComponent';
import { SwitchComponent } from '../../components/SwitchComponent/SwitchComponent';
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';

export default function LoginPage() {


    
  return (
    <div>
       <ArrowBackComponent/>
      <SwitchComponent className="switch"/>
      <h1 className="p-title">Inicia sesión ahora</h1>
      <SocialMediaComponent/>
      <div className="correo">
      <span className="p-subtitle">O utiliza tu correo electronico</span>
      </div>
      <LoginComponent/>
    </div>
  );
}
