var socialMediaData = [
    {
        nickname: "Sahil",
        username: "@sahil",
        profileImage: "./images/social-media/user-1.jpg",
        content: "The Cathay will close temporarily in August to undergo its first major revamp since 2003.",
        image: "https://onecms-res.cloudinary.com/image/upload/s--vqVkoOAc--/c_crop,h_841,w_1495,x_5,y_1/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2023/02/17/the_cathay_photo_credit_-_cathay_organisation_holdings.jpg?itok=i7bJ17zu"
    },
    {
        nickname: "Lee Krit",
        username: "@lee_krit",
        profileImage: "./images/social-media/user-2.jpg",
        content: "Newsforest just updated their design! Check it out!"
    },
    {
        nickname: "John Doe",
        username: "@john_doe",
        profileImage: "./images/social-media/user-3.jpg",
        content: "The number of people attempting to enter Singapore under a different or impersonated identity increased by 15-fold in 2022. \nALSO: Singapore is looking to install 61 more automated lanes at border checkpoints this year.",
        image: "https://onecms-res.cloudinary.com/image/upload/s--fvwHOKxE--/c_fill,g_auto,h_468,w_830/fl_relative,g_south_east,l_mediacorp:cna:watermark:2021-08:cna,w_0.1/f_auto,q_auto/v1/mediacorp/cna/image/2022/04/01/20220401_074542.jpg?itok=lGLLUUwc"
    },
    {
        nickname: "Elizabeth Tan",
        username: "@tan_eliza",
        profileImage: "./images/social-media/user-4.jpg",
        content: "Terra founder Do Kwon and his company have been charged in the US with defrauding investors with his cryptocurrencies. ",
        image: "https://onecms-res.cloudinary.com/image/upload/s--os1myBwq--/c_fill,g_auto,h_468,w_830/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/v1/one-cms/core/2023-02-16t222657z_2_lynxmpej1f118_rtroptp_3_usa-funds-sec.jpg?itok=ldFCCupI"
    },
    {
        nickname: "Tom Hanks",
        username: "@tom_hanks",
        profileImage: "./images/social-media/user-5.jpg",
        content: "Die Hard actor Bruce Willis has been diagnosed with dementia. ",
        image: "https://onecms-res.cloudinary.com/image/upload/s--hqIM0s8d--/c_crop,h_513,w_683,x_1,y_1/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/one-cms/core/2023-02-16t212032z_3_lynxmpej1f0zh_rtroptp_3_people-bruce-willis.jpg?itok=G6oDy_qc"
    },
    {
        nickname: "Louisa Tang",
        username: "@tangLouisa",
        profileImage: "./images/social-media/user-6.jpg",
        content: "Some companies in Singapore say they will double their paternity leave to four weeks in line with the Budget 2023 announcement. ",
        image: "https://onecms-res.cloudinary.com/image/upload/s--aM27D5Il--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/father--baby-bonding.jpg?itok=cRVWm2YO"
    },
    {
        nickname: "Grace Liew",
        username: "@liew_grace",
        content: "Hi, where can I contact the news team? I have a story to share.",
        image: ""
    }

]

var header
var darkHeader
var lightHeader

var sidebar

function generalOnload() {
    handlebarsHelper()
    addFooter()
}

function handlebarsHelper() {
    Handlebars.registerHelper("dateAndTime", function (time) {
        var date = new Date(time)
        return date.toDateString() + ", " + date.toLocaleTimeString()
    })

    Handlebars.registerHelper("profileImageHelper", function (profileImage) {
        if (profileImage == undefined) {
            return "./images/social-media/sample_profile_picture.png"
        }
        else {
            return profileImage
        }
    })
}

function setHeaderStyle(index) {
    if (!index) {
        header.classList.add("header-light")
        darkHeader.style.display = "none"
        lightHeader.style.display = "flex"
        return
    }

    if (window.scrollY > 240) {
        header.classList.add("header-light")
        darkHeader.style.display = "none"
        lightHeader.style.display = "flex"
    }
    else {
        header.classList.remove("header-light")
        darkHeader.style.display = "flex"
        lightHeader.style.display = "none"
    }
}

function addHeader(index) {
    header = document.getElementById('header-div')

    $('#header-div').load('./assets/elements/header.html', function () {
        darkHeader = document.getElementById('header-dark')
        lightHeader = document.getElementById('header-light')

        setHeaderStyle(index)
        if (index) {
            window.addEventListener("scroll", setHeaderStyle)
        }
    });
}

function addFooter() {
    $('#footer').load('./assets/elements/footer.html');
}

function addSidebar() {
    $('#sidebar').load('./assets/elements/social-media-feed.html', function () {
        addSocialMedia()
    });
}

function addSocialMedia() {
    socialMediaTemplate = Handlebars.compile(document.getElementById("social-media-feed-article-template").innerHTML)

    socialMediaData.forEach(function (article) {
        document.getElementById("social-media-feed").innerHTML += socialMediaTemplate(article)
    })
}

function addNewsList(name, newsListData) {
    $(`#scripts`).load('./assets/elements/news-list.html', function () {
        var newsList = Handlebars.compile(document.getElementById('news-list-template').innerHTML)
        var newsListContent = document.getElementById("news-list")
        if (name) newsListContent.innerHTML = `<h3 class="m-0">${name}</h3>`
        newsListData.forEach((news) => {
            newsListContent.innerHTML += newsList(news)
        })
    });
}