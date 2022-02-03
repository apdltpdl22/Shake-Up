/**
 * 채널에 따라하기 영상 업로드
 * 
 * @author 명성
 * @version 1.0.0
 * 작성일 : 2022-02-02
 * 
 **/


import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import kakao from './images/kakao.jpg' 
import insta from './images/instagram.jpg'
import facebook from './images/facebook.png'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function DanddaUpload(props) {

  const navigate = useNavigate();
  const classes = useStyles();
  const [state, setState] = React.useState({
    comments: false,
    score: false,
    show: false,
  });

  // const uid = localStorage.getItem('user')

  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(tags)
    setState({
      comments: event.target[3].checked,
      score: event.target[4].checked,
      show: event.target[5].checked
    })
    console.log(state.comments)
    console.log(state.show)

    const credentials = {
      category: 0,
      iscomment: state.comments,
      content: "new_vid_content",
      score: 100,
      tag: [
        {
          tname: tags
        }
      ],
      isshow: state.show,
      thumbnail: "new_vid_thumbnail",
      title: "new_vid_title",
      uid: 2,
      url: "new_vid_url"      
    }

    axios.post(`/video/create`, credentials)
    .then(res => {
      console.log(res.data)      
    })
    .catch(err => {
      console.log('영상 생성 실패')
    });
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  // 공유하기
  useEffect(() => {
	  window.Kakao.Link.createScrapButton({
	    container: '#kakao-share', // id=kakao-share 부분을 찾아 그 부분에 렌더링합니다. 
	    requestUrl: window.location.href,
	  })
	}, []);

  const [tags, setTags] = React.useState(["댄따"])
  function addTags(newTags){
    setTags(newTags)
  }


// 폼그룹 => textfield, 해쉬태그, 스위치 일괄 submit
  return (
    <form onSubmit={onSubmit}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' 
    , width: '100%', height: '88vh'}}>
    <FormGroup role="form">
      <h1>여기 썸네일</h1>
      <TextField id="outlined-basic" variant="outlined"/>
      <br/>
      <ReactTagInput 
      tags={tags} 
      onChange={addTags}
      placeholder='태그를 입력해주세요'
      />
      <br/>      
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="comments"
            color="primary"
          />
        }
        label="댓글 허용"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="score"
            color="primary"
          />
        }
        label="점수 표시"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="show"
            color="primary"
          />
        }
        label="영상 비공개"
      />
      <br/>
      <p>영상 소셜 공유하기</p>
        <div style={{ display:'flex', flexDirection:'row' }}>
          <Button id="kakao-share" className="share-wrapper">
            <div className='circle'>
              <img className="kakao shareicon" src={kakao} />
            </div>
          </Button>
          <div className='circle'>
            <img src= {insta} />
          </div>
          <div className='circle'>
          <button className="share-wrapper" onClick={() => {
            window.open(`https://www.facebook.com/sharer/sharer.php?href=${window.location.href}`, '페이스북 공유하기', 'width=600,height=800,location=no,status=no,scrollbars=yes');
          }}>
            <img className="facebook shareicon" src={facebook} />
          </button>
          </div>
        </div>
      <br/> 
      <Button variant="contained" type="submit">제출</Button>
    </FormGroup>
    </form>
  );
}

export default DanddaUpload;