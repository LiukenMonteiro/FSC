const loginUser = (email, password, onSucess, onError) => {

    setTimeout(() => {
        const error = false;

        if (error) {
            return onError("Error na conexão ao banco.");
        }

        console.log("Usuário verificado no banco de dados!");
        onSucess({ email });
    }, 3000);
};

const getUserVideos = (onSucess, onError) => {
    setTimeout(() => {
        onSucess(["video_1", "video_2", "video_3"]);
    }, 2000);
};

const getUserVideosDetails = (onSucess, onError) => {
    setTimeout(() => {
        onSucess({ id: 1, name: "NOde.js Assíncrono", duration: 1});
    }, 2000);
};

const user = loginUser("test@test.com", "password", (user) => {
    console.log("Usuário logado com sucesso!");
    console.log(user);

    getUserVideos((videos) => {
        console.log("Videos do usuário recuperados com sucesso!", videos);     

        getUserVideosDetails((video) => {
            console.log("Detalhes do vídeo 1 do usuário:", video);
        }, (error) => {
            console.log(error);
        });
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
});
