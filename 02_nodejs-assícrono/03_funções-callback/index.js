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

const user = loginUser("test@test.com", "password", (user) => {
    console.log("Usuário logado com sucesso!");
    console.log(user);

    getUserVideos((videos) => {
        console.log("Videos do usuário recuperados com sucesso!", videos);     
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
});
