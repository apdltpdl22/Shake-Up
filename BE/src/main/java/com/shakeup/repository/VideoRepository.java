package com.shakeup.repository;

import com.shakeup.model.Videos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VideoRepository extends JpaRepository<Videos, Long> {
    Optional<Videos> findVideosByVid(long vid);

    Optional<Videos> findVideosByVidAndCategory(long vid, int category);

<<<<<<< HEAD
=======
    Optional<Videos> findByVidAndUid(long vid, int uid);

    Videos findByVid(Long vid);
>>>>>>> 35923cf2cbf89f709c3a6bfa3f1800fb12c34cbf
}