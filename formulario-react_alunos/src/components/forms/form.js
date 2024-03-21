import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import '../css/style.css';
import minhaImagem from '../images/login.jpg';
import verified from '../images/verified.png';

//Função principal que representa o componetne de fornulário
function MyForm() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    //Para controlar o estado do formulário
    const [status, setStatus] = useState({submittedSuccessfully: false, loading: false, showPassword: false});

    //Função que é chamada quando o formulario é enviado
    const onSubmit = data => {
        ({...status, loading: true});//Atualiza o estado para indicar que está carregando


        //Simula um tempo de espera antes de atualizar o estado para sucesso
        setTimeout(() => {
            setStatus({ submittedSuccessfully: true, loading: false});
        }, 1000);
    };

    //Função para gerar mensagens de erro com base no nome do campo
    const generateErrorMessage = fielName => {
        return {
            required: `${fielName} é obrigatório`, //Mensagem para campos obrigatórios
            pattern: fielName === 'email'? 'Formato de e-mail inválido': null //Mensagem para formulário de e-mail inválido 
        };
    };

    //Função para lidar com o retorno à página inicial
    const handleReturnButtonClick = () => {
        //Redireciona para a página inicial
        window.location.href = '/';
    };

    //Renderização condicional (usando ternário ?) com base no sucesso de envio do formulário
    return (
        <div className='container'>
            {status.submittedSuccessfully ? (
                 <div className='success-message'>
                    <img src={verified} alt='Verificado' />
                    <h2>Formulário Enviado com Sucesso!</h2>
                    <p>Obrigado por enviar o formulário.</p>
                    <button className='btn' onClick={handleReturnButtonClick}>Retornar</button>
                 </div>
            ):(
                //Se o formulário ainda não foi enviado co sucesso, exibe o formulário para preenchimento
                <div className='form-sign-up'>
                    <div>
                        <img src={minhaImagem} alt='imagem de uma pessoa se cadastrando pelo celular' />
                    </div>

                    <section>
                        <h1>Inscreva-se</h1>

                        {/* Formulário com campo controlado pelo hook useForm*/}
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                        {/* Campo nome*/}
                            <div className='form flex'>
                                <label htmlFor='name'>Nome</label>
                                <input 
                                {...register("firstName", generateErrorMessage("Nome"))}
                                placeholder="Nome"
                                id='name'
                                autoComplete='off'
                                className={errors.firstName ? 'error' : ''}
                                />
                                {errors.firstName && <span className='error-message'>{errors.firstName.message}</span>}
                            </div>


                             {/* Campo sobrenome*/}
                             <div className='form flex'>
                                <label htmlFor='sobrenome'>Sobrenome</label>
                                <input 
                                {...register("lastName", generateErrorMessage("Sobrenome"))}
                                placeholder="Sobrenome"
                                id='sobrenome'
                                autoComplete='off'
                                className={errors.lastName ? 'error' : ''}
                                />
                                {errors.lastName && <span className='error-message'>{errors.lastName.message}</span>}
                            </div>


                             {/* Campo E-mail*/}
                             <div className='form flex'>
                                <label htmlFor='email'>Email</label>
                                <input 
                                {...register("email", generateErrorMessage("E-mail"))}
                                placeholder="E-mail"
                                id='email'
                                autoComplete='off'
                                className={errors.firstName ? 'error' : ''}
                                />
                                {errors.email && <span className='error-message'>{errors.email.message}</span>}
                            </div>

                             {/* Campo senha*/}
                             <div className='form flex'>
                                <label htmlFor='password'>Senha</label>
                                <div className="password-input-container">
                                <input 
                                {...register("password", generateErrorMessage("Senha"))}
                                placeholder="Senha"
                                id='password'
                                autoComplete='off'
                                type={status.showPassword ? 'text' : 'password'}
                                className={errors.password ? 'error' : ''}
                                />

                                <button 
                                type="button"
                                className='password-toggle'
                                onClick={() => setStatus({...status, showPassword: !status.showPassword})}
                                >

                                    {status.showPassword ? <i className="fas fa-eye"></i> : <i className='fas fa-eye-slash'></i>}
                                    
                                </button>
                                </div>
                               {errors.password && <span className='error-message'>{errors.password.message}</span>}
                             </div>

                             {/* Botãp Enviar */}
                             <button className='btn' type="submit" disabled={status.loading}>
                                {status.loading ? 'Enviando...': 'Enviar'}
                             </button>
                        </form>
                        {status.loading && <p>Carregando...</p>}
                    </section>
                </div>
            )}
        </div>
    );


}

//Exporta componente "MyForm"
export default MyForm;