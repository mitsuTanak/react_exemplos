// Imposrta o React e os hoocks necessarios do React
import React, {useState} from 'react';
// 
// 
import {useForm} from 'react-hook-form';
// 
import '../css/style.css';
// 
import minhaImagem from '../images/login.png';
// 
import verified from '../images/verified.png';

// 
function MyForm() {
    // 
    // 
    const { register, handleSubmit, formState: {errors}} = useForm();
    // 
    const [status, setStatus] = useState ({SubmittedSuccessfully: false, loading: false, showPassword: false});

    // 
    const onSubmit = data => {
        // 
        setStatus({...status, loading: true}); //

        // 
        setTimeout(() => {
            setStatus({SubmittedSuccessfully: true, loading: false});
        }, 1000);
    };

    const generateErrorMensage = fieldName =>{
        return{
            required: `${fieldName} é obrigatorio`,//
            pattern: fieldName === 'email' ? 'Formato de email invalido': null//
        }
    };

    // 
    const hadleReturnButtonClick = () => {
        // 
        window.location.href = '/';
    };

    // 
    return(
        <div className='container'>
            {status.SubmittedSuccessfully ? (
                // 
                <div className='success-message'>
                    <img src={verified} alt='Verificado' />
                    <h2>Formulario Enviado com Sucesso</h2>
                    <p>Obrigado por enviar o formulario.</p>
                    <button className='btn' onClick={hadleReturnButtonClick}>Retornar</button>
                </div>
            ): (
                // 
                <div className='form-sing-up'>
                    <div>
                        <img src={minhaImagem} alt="imagem de uma pessoa se cadastrando pelo celular" />
                    </div>

                    <section>
                        <h1>Inscreva-se</h1>

                        {/*  */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/*  */}
                            <div className='form flex'>
                                <label htmlFor="name">Nome</label>
                                <input
                                    {...register("firstName", generateErrorMensage("Nome"))}
                                    placeholder='Nome'
                                    id='name'
                                    autoComplete='off'
                                    className={errors.fieldName ? 'error' : ''}
                                />
                                {errors.firstName && <span className='error-message'>{errors.firstName.message}</span>}
                            </div>

                            {/*  */}
                            <div className='form flex'>
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input
                                    {...register("lastName", generateErrorMensage("Sobrenome"))}
                                    placeholder='Sobrenome'
                                    id='sobrenome'
                                    autoComplete='off'
                                    className={errors.lastName ? 'error' : ''}
                                />
                                {errors.lastName && <span className='error-message'>{errors.lastName.message}</span>}
                            </div>

                            {/*  */}
                            <div className='form flex'>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    {...register("email", generateErrorMensage("E-mail"))}
                                    placeholder='E-mail'
                                    id='email'
                                    autoComplete='off'
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className='error-message'>{errors.email.message}</span>}
                            </div>

                            {/*  */}
                            <div className='form flex'>
                                <label htmlFor="password">Senha</label>
                                <div className='password-input-container'>
                                    <input
                                        {...register("password", generateErrorMensage("Senha"))}
                                        placeholder='Senha'
                                        id='password'
                                        autoComplete='off'
                                        className={errors.password ? 'error' : ''}
                                    />

                                    <button
                                        type='burron' //
                                        className='password-toggle'//
                                        onClick={() => setStatus({...status, showPassword: !status,showPassword})}
                                        // 
                                    >
                                        {status.showPassword ? <i className='fa fa-eye'></i> : <i className='fa fa-eye-slash'></i>}
                                        {/*  */}
                                    </button>
                                </div>

                                {errors.password && <span className='error-message'>{errors.password.message}</span>}
                                
                            </div>
                            {/*  */}
                            <button className='btn' type='submit' disabled={status.loading}>
                            
                            </button>
                        </form>
                        {status.loading && <p>Carregando...</p>}
                    </section>
                </div>
            )}
        </div>
    );

};

export default MyForm;