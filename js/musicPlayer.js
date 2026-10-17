function audioPlayer(playPauseId, nameOfSongId, seekbarId,audioId){
    const playPauseButton = document.getElementById(playPauseId);
    const nameOfSong = document.getElementById(nameOfSongId);
    const seekbar=document.getElementById(seekbarId);
    const audio = document.getElementById(audioId);


    if (!playPauseButton || !nameOfSong || !seekbar || !audio) {
            console.error("Один из элементов не найден:", { playPauseId, nameOfSongId, seekbarId, audioId });
            return; // Прекращаем выполнение функции
    }
    


    function playPause() {
        if (audio.paused) {
            seekbar.style.display='inline-block';
            nameOfSong.style.display='none';

            audio.play();
            playPauseButton.innerHTML='☠';
        }
        else {
            seekbar.style.display='none';
            nameOfSong.style.display='inline-block';
            

            audio.pause();
            playPauseButton.innerHTML='&#9654;';
        }
    }

    nameOfSong.addEventListener('click',playPause);
    playPauseButton.addEventListener('click', playPause);

    audio.addEventListener('timeupdate', function(){
        seekbar.value=audio.currentTime;
    });

    seekbar.addEventListener('input',function(){
        audio.currentTime=seekbar.value;
    });
    audio.addEventListener('loadedmetadata', function(){
        seekbar.max=audio.duration;
    });

}
audioPlayer('playPause1','nameOfSong1','seekbar1','audio1');
audioPlayer('playPause2','nameOfSong2','seekbar2','audio2');
audioPlayer('playPause3','nameOfSong3','seekbar3','audio3');
audioPlayer('playPause4','nameOfSong4','seekbar4','audio4');
audioPlayer('playPause5','nameOfSong5','seekbar5','audio5');
audioPlayer('playPause6','nameOfSong6','seekbar6','audio6');
audioPlayer('playPause7','nameOfSong7','seekbar7','audio7');
audioPlayer('playPause8','nameOfSong8','seekbar8','audio8');
audioPlayer('playPause9','nameOfSong9','seekbar9','audio9');
audioPlayer('playPause10','nameOfSong10','seekbar10','audio10');

audioPlayer('playPause11','nameOfSong11','seekbar11','audio11');
audioPlayer('playPause12','nameOfSong12','seekbar12','audio12');
audioPlayer('playPause13','nameOfSong13','seekbar13','audio13');
audioPlayer('playPause14','nameOfSong14','seekbar14','audio14');
audioPlayer('playPause15','nameOfSong15','seekbar15','audio15');
audioPlayer('playPause16','nameOfSong16','seekbar16','audio16');
audioPlayer('playPause17','nameOfSong17','seekbar17','audio17');
audioPlayer('playPause18','nameOfSong18','seekbar18','audio18');
audioPlayer('playPause19','nameOfSong19','seekbar19','audio19');
audioPlayer('playPause20','nameOfSong20','seekbar20','audio20');

audioPlayer('playPause21','nameOfSong21','seekbar21','audio21');
audioPlayer('playPause22','nameOfSong22','seekbar22','audio22');
audioPlayer('playPause23','nameOfSong23','seekbar23','audio23');
audioPlayer('playPause24','nameOfSong24','seekbar24','audio24');
audioPlayer('playPause25','nameOfSong25','seekbar25','audio25');
audioPlayer('playPause26','nameOfSong26','seekbar26','audio26');
audioPlayer('playPause27','nameOfSong27','seekbar27','audio27');
audioPlayer('playPause28','nameOfSong28','seekbar28','audio28');
audioPlayer('playPause29','nameOfSong29','seekbar29','audio29');
audioPlayer('playPause30','nameOfSong30','seekbar30','audio30');

audioPlayer('playPause31','nameOfSong31','seekbar31','audio31');
audioPlayer('playPause32','nameOfSong32','seekbar32','audio32');
audioPlayer('playPause33','nameOfSong33','seekbar33','audio33');
audioPlayer('playPause34','nameOfSong34','seekbar34','audio34');
audioPlayer('playPause35','nameOfSong35','seekbar35','audio35');
audioPlayer('playPause36','nameOfSong36','seekbar36','audio36');
audioPlayer('playPause37','nameOfSong37','seekbar37','audio37');
audioPlayer('playPause38','nameOfSong38','seekbar38','audio38');
audioPlayer('playPause39','nameOfSong39','seekbar39','audio39');
audioPlayer('playPause40','nameOfSong40','seekbar40','audio40');

audioPlayer('playPause41','nameOfSong41','seekbar41','audio41');
audioPlayer('playPause42','nameOfSong42','seekbar42','audio42');
audioPlayer('playPause43','nameOfSong43','seekbar43','audio43');
audioPlayer('playPause44','nameOfSong44','seekbar44','audio44');
audioPlayer('playPause45','nameOfSong45','seekbar45','audio45');
audioPlayer('playPause46','nameOfSong46','seekbar46','audio46');
audioPlayer('playPause47','nameOfSong47','seekbar47','audio47');

// hospital for souls
audioPlayer('playPause61','nameOfSong61','seekbar61','audio61');

audioPlayer('playPause62','nameOfSong62','seekbar62','audio62');

// pastel ghost clouds
audioPlayer('playPause63','nameOfSong63','seekbar63','audio63');

// new way out
audioPlayer('playPause64','nameOfSong64','seekbar64','audio64');

// let down
audioPlayer('playPause65','nameOfSong65','seekbar65','audio65');

// dead girlfriend
audioPlayer('playPause66','nameOfSong66','seekbar66','audio66');

// duality
audioPlayer('playPause67','nameOfSong67','seekbar67','audio67');


// document.addEventListener('DOMContentLoaded',function(){   });

audioPlayer('playPause48','nameOfSong48','seekbar48','audio48');
audioPlayer('playPause49','nameOfSong49','seekbar49','audio49');
audioPlayer('playPause50','nameOfSong50','seekbar50','audio50');
audioPlayer('playPause51','nameOfSong51','seekbar51','audio51');
audioPlayer('playPause52','nameOfSong52','seekbar52','audio52');
audioPlayer('playPause53','nameOfSong53','seekbar53','audio53');
audioPlayer('playPause54','nameOfSong54','seekbar54','audio54');
audioPlayer('playPause55','nameOfSong55','seekbar55','audio55');
audioPlayer('playPause56','nameOfSong56','seekbar56','audio56');
audioPlayer('playPause57','nameOfSong57','seekbar57','audio57');
audioPlayer('playPause58','nameOfSong58','seekbar58','audio58');
audioPlayer('playPause59','nameOfSong59','seekbar59','audio59');
audioPlayer('playPause60','nameOfSong60','seekbar60','audio60');