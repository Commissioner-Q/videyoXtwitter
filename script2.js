function uploadVideo() {
    const videoUpload = document.getElementById('video-upload');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const downloadLink = document.getElementById('download-link');

    const file = videoUpload.files[0];
    const url = URL.createObjectURL(file);

    videoSource.src = url;
    videoPlayer.load();
    downloadLink.href = url;
    downloadLink.download = file.name;
}
// Example function to fetch old videos based on URL parameters
function loadVideoFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoFile = urlParams.get('video');

    if (videoFile) {
        const videoPlayer = document.getElementById('video-player');
        const videoSource = document.getElementById('video-source');
        const downloadLink = document.getElementById('download-link');
        
        // Assume videos are stored in a folder named "videos"
        const videoPath = videos/${videoFile};

        videoSource.src = videoPath;
        videoPlayer.load();
        downloadLink.href = videoPath;
        downloadLink.download = videoFile;
    }
}

// Call the function to load video from URL on page load
window.onload = loadVideoFromURL;