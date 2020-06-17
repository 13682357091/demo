<template>
    <div id="documents">
        <div class="title">
            For Puppy Cube
        </div>
        <div class="btn_container">
            <a href="https://drive.google.com/file/d/1WSpJp86P3sZpqQ-mYDtBA8K0RseVEvYi/view?usp=sharing" target="_blank"><div class="btn float_left">Download User Manual</div></a>
            <a href="http://cube.hachismart.com/en/support" target="_blank"><div class="btn float_left margin_left">Online User Manual</div></a>
            <div class="clear"></div>
        </div>

        <div class="title title_margin">
            Hachi Infinite M1/M1 Pro
        </div>
        <div class="btn_container">
            <a href="http://www.hachismart.com/en/manual?id=2" target="_blank"><div class="btn">Online User Manual</div></a>
        </div>

        <div class="title title_margin">
            For Guide Videos
        </div>
        <div class="btn_container">
            <a href="https://drive.google.com/open?id=1qOVY8LTyVkaxlS64E3s-7Y1WMGU9fRJ2" target="_blank"><div class="btn">Puppy Cube</div></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#documents {
    text-align: left;
}

.title {
    font-size: 26px;
    font-family: "NeutraText-Book";
}

    .btn {
        width: 242px;
        height: 52px;
        font-family: 'NeutraText-Book';
        font-size: 20px;
        background-color: #494949;
        line-height: 50px;
        color: white;
        border-radius:3px 3px 3px 3px;
        -webkit-box-shadow: 0px 0px 15px #aaa7a7;//（这是专对火狐浏览器的支持而设置的）
        -moz-box-shadow: 0px 0px 15px #aaa7a7;//（这是对Safari和Chrome浏览器而设置的）
        box-shadow: 0px 0px 15px #aaa7a7;
        cursor: pointer;
        text-align: center;
    }

    .btn_container {
        margin-top: 42px;
    }

    .title_margin {
        margin-top: 68px;
    }

    .float_left {
        float: left;
    }

    .margin_left {
        margin-left: 50px;
    }

    .clear {
        clear: both;
    }

    a {
        text-decoration-line: none;
    }
</style>
