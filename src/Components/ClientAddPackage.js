import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  FlexContainer,
  UndrawIconStyle,
  Input,
  Button,
  colors,
  LeftArrowIconStyle,
  FormStyled,
  LabelStyled,
} from '../Styles/Styles'
import { ReactComponent as AddPackageIcon } from '../Icons/adding-package-icon.svg'
import { ReactComponent as LeftArrowIcon } from '../Icons/left-arrow-icon.svg'
import { useNavigate } from 'react-router-dom'
import variables from '../Variables'

function ClientAddPackage(props) {
  let history = useNavigate()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    if (localStorage.getItem('account-type') !== 'client') {
      history('/login')
    }
  }, [])
  const onSubmit = (data) => {
    let token = localStorage.getItem('access-token')
    if (token === null) {
      return false
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      // address from -> data.countryF
      // address to -> data.countryT
      method: 'POST',
      body: JSON.stringify({
        addressFrom: {
          country: data.countryF,
          city: data.cityF,
          street: data.streetF,
          flatNumber: data.flatnumberF,
          postCode: data.postcodeF,
        },
        addressTo: {
          country: data.countryT,
          city: data.cityT,
          street: data.streetT,
          flatNumber: data.flatnumberT,
          postCode: data.postcodeT,
        },
        price: parseFloat(data.cost),
        weight: parseFloat(data.weight),
        description: data.remarks,
      }),
    }
    fetch(`${variables.endpoint}/api/user/client-errands`, options).then(
      (result) => {
        if (result.status === 200) {
          alert('Package Added')
        } else {
          alert('Something went wrong')
        }
      }
    )
  }

  const fillAddress = () => {
    let streetRef = document.getElementById('street')
    let flatNrRef = document.getElementById('flatNr')
    let postCodeRef = document.getElementById('postCode')
    let cityRef = document.getElementById('city')
    let countryRef = document.getElementById('country')

    let token = localStorage.getItem('access-token')
    if (token === null) {
      return false
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      // address from -> data.countryF
      // address to -> data.countryT
      method: 'POST',
    }
    fetch(`${variables.endpoint}/api/user/info`, options)
      .then((result) => {
        if (result.status === 200) {
          return result.json()
        } else {
          alert('Something went wrong')
        }
      })
      .then((data) => {
        streetRef.value = data.address?.street
        flatNrRef.value = data.address?.flatNumber
        postCodeRef.value = data.address?.postCode
        cityRef.value = data.address?.city
        countryRef.value = data.address?.country
      })
  }

  return (
    <>
      {/* Left arrow (Go Back) */}
      <LeftArrowIcon
        onClick={() => {
          history(-1)
        }}
        style={LeftArrowIconStyle}></LeftArrowIcon>

      {/* Title Client Registration*/}
      <FlexContainer orientation='v' height='30%'>
        <div
          style={{
            color: colors.darkBlue,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,0.25)',
          }}>
          Adding package
        </div>
        <AddPackageIcon
          className='icon'
          style={(UndrawIconStyle, { marginTop: '2rem' })}></AddPackageIcon>
      </FlexContainer>

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled for='af'>From</LabelStyled>
        <Input
          id='af'
          placeholder='Street'
          {...register('streetF', { required: true })}></Input>
        <Input
          placeholder='Flat Number'
          {...register('flatnumberF', { required: true })}></Input>
        <Input
          placeholder='Post Code'
          {...register('postcodeF', { required: true })}></Input>
        <Input
          placeholder='City'
          {...register('cityF', { required: true })}></Input>
        <Input
          placeholder='Country'
          {...register('countryF', { required: true })}></Input>
        <LabelStyled for='street'>To</LabelStyled>
        <Input
          id='street'
          placeholder='Street'
          {...register('streetT', { required: true })}></Input>
        <Input
          id='flatNr'
          placeholder='Flat Number'
          {...register('flatnumberT', { required: true })}></Input>
        <Input
          id='postCode'
          placeholder='Post Code'
          {...register('postcodeT', { required: true })}></Input>
        <Input
          id='city'
          placeholder='City'
          {...register('cityT', { required: true })}></Input>
        <Input
          id='country'
          placeholder='Country'
          {...register('countryT', { required: true })}></Input>
        <Button
          onClick={fillAddress}
          value='Use my address'
          type='button'
          style={{ width: 'fit-content' }}></Button>
        <LabelStyled for='det'>Detalis</LabelStyled>
        <Input
          id='det'
          placeholder='Cost'
          {...register('cost', { required: true })}></Input>
        <Input
          placeholder='Weight'
          {...register('weight', { required: true })}></Input>
        <Input
          placeholder='Remarks'
          style={{
            height: '8rem',
          }}
          {...register('remarks', { required: true })}></Input>
        <Button type='submit' value='Add'></Button>
      </FormStyled>
    </>
  )
}

export default ClientAddPackage
