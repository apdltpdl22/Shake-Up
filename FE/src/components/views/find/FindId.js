import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function FindId(props) {
  const [Email, setEmail] = useState("")
  const [EmailError, setEmailError] = useState("")

  const onEmailHandler = (event) => {
    setEmailError("")
    setEmail(event.currentTarget.value)
    if (Email !="" && !isEmail(Email)) {
        setEmailError("이메일을 형식에 맞게 작성해주세요.")
    }
  }
  const isEmail = (Email) => {
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    return emailRegex.test(Email);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Email === "") {
        setEmailError("이메일을 입력해야 합니다.")
    }

    if (isEmail(Email)) {
        console.log('이메일 정보')
        console.log('Email', Email)
    }
  }

  const findEmail = () => {
    //axios로 찾기
    // 이메일 일치하면 해당 이메일에 대한 id 반환
    // 틀리면 setEmailError("회원정보에 등록된 이메일이 아닙니다.")
  }

  const classes = useStyles();

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center' 
      , width: '100%', height:'95vh'}}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler} className={classes.root} autoComplete='off'> 
        
        <h2>아이디 찾기</h2>
        <TextField id="standard-basic-email" label="이메일을 입력해주세요" onChange={onEmailHandler} helperText={EmailError} autoCapitalize='off' />
        <br/>
        <Button style={{ width: '100%'}} variant="contained" color="primary" type="button" disabled={Email===""} onClick={findEmail}>
            아이디 찾기
        </Button>
      </form>      
  </div>
  );
}

export default FindId;