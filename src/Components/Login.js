import React from 'react'
import { useForm } from 'react-hook-form'

import {
  FlexContainer,
  UndrawIconStyle,
  FormStyle,
  Input,
  Button,
  colors,
} from '../Styles/Styles'
import { ReactComponent as MainLogo } from '../Icons/main-logo-icon.svg'

function Login(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    if (data.confirmPasword !== data.password)
      return alert('Passwords do not match!')

    // TODO Send to back-end :^)
  }

  return (
    <>
      <FlexContainer orientation='v' height='100%'>
        <MainLogo className='icon'></MainLogo>

        {/* Title Login*/}
        <div
          style={{
            color: colors.darkBlue,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.25)',
          }}>
          Please, log in
        </div>
        <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder='Username'
            {...register('username', { required: true })}></Input>
          <Input
            placeholder='Password'
            {...register('password', { required: true })}></Input>
          <Button type='submit' value='Log in'></Button>
        </form>
      </FlexContainer>
    </>
  )
}

export default Login
