package com.shakeup.controller;

import com.shakeup.model.Videos;
import com.shakeup.request.video.VideoCreateRequest;
import com.shakeup.request.video.VideoUpdateRequest;
import com.shakeup.service.VideoService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequestMapping("/video")
@RestController
public class VideoController {

    @Autowired
    private VideoService videoService;

    public static final Logger logger = LoggerFactory.getLogger(VideoController.class);

    @ApiOperation(value = "영상 생성", notes = "영상 정보를 받는다. 게시판 생성 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @PostMapping(value = "/create")
    public ResponseEntity<String> createVideo(@RequestBody VideoCreateRequest videoCreateRequest){
        String res = videoService.createVideo(videoCreateRequest);

        if (res.equals("fail")) {
            return new ResponseEntity<>("실패", HttpStatus.OK);
        }
        return new ResponseEntity<>("성공", HttpStatus.OK);

    }

    @ApiOperation(value = "영상 수정", notes = "영상 정보를 받는다. 게시판 수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @PostMapping(value = "/update")
    public ResponseEntity<String> updateVideo(@RequestBody VideoUpdateRequest videoUpdateRequest){
        String res = videoService.upadateVideo(videoUpdateRequest);

        if (res.equals("fail")) {
            return new ResponseEntity<>("실패", HttpStatus.OK);
        }
        return new ResponseEntity<>("성공", HttpStatus.OK);
    }
    @ApiOperation(value = "영상 삭제", notes = "영상 정보를 받는다. 게시판 삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @PostMapping(value = "/delete/{vid}")
    public ResponseEntity<String> deleteVideo(@PathVariable("vid") long vid){
        String res = videoService.deleteVideos(vid);

        if (res.equals("fail")) {
            return new ResponseEntity<>("실패", HttpStatus.OK);
        }
        return new ResponseEntity<>("성공", HttpStatus.OK);
    }

}
