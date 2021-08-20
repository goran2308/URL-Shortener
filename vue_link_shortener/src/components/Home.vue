<template>
  <div class="container">
    <div class="content-wrap">
      <div class="bg-img">
        <img src="../assets/bg.jpg" alt="" />
      </div>

      <form v-on:submit.prevent="submit(url)">
        <div class="form-input">
          <div class="form-group">
            <label for="url">Enter Url:</label>
            <input type="url" class="form-control" v-model="url" />
          </div>

          <div class="form-btn">
            <button class="btn btn-primary" type="submit">Shorten URL</button>
          </div>
        </div>

        <div class="shortURL" v-show="shortUrl">
          <p>Short URL:</p>
          <a :href="shortUrl" class="text-primary">{{ shortUrl }}</a>
        </div>
      </form>

      <div class="footer">
        <div class="social">
          <ul>
            <li>
              <a href="https://github.com/goran2308"
                ><i class="fa fa-github" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/goran-solev-5a5bb487/"
                ><i class="fa fa-linkedin-square" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a href="https://www.facebook.com/solevgoranclear"
                ><i class="fa fa-facebook-official" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          Copyright &copy; 2021 Goran Solev <br />All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      url: "",
      shortUrl: "",
    };
  },
  methods: {
    submit: async function (url) {
      try {
        const api = "http://localhost:3000/url";
        const response = await axios.post(api, {
          url,
        });
        this.shortUrl = response.data.shortUrl;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.container {
  display: flex;
  width: 100%;
  height: calc(100vh - 130px);
  flex-direction: column;
}

.content-wrap {
  height: calc(100vh - 130px);
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #16df95;
  min-height: 25vh;
  width: 100%;
  padding: 0 50px;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.form-group label {
  width: 110px;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
}

.form-input {
  display: flex;
  width: 100%;
}

input {
  width: 100%;
  margin: 0 30px;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
}

input:focus {
  outline: none;
}

.form-btn {
  display: flex;
}

.form-btn .btn {
  border: none;
  width: 120px;
  padding: 15px;
  border-radius: 5px;
  background-color: #ef6124;
  color: white;
  font-family: "Poppins", sans-serifs;
  cursor: pointer;
}

.shortURL {
  margin-top: 40px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1.2em;
}

.bg-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-img img {
  max-width: 640px;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
}

.footer ul {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}

.footer ul li {
  list-style: none;
  margin: 0 20px;
}

.footer ul li a {
  padding: 5px;
  font-size: 2em;
  color: #ef6124;
}

.copyright {
  font-family: "Poppins", sans-serif;
  font-size: 0.75em;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  form {
    width: 100%;
  }
}

@media screen and (max-width: 425px) {
  form {
    width: 100%;
    padding: 0;
  }

  .form-input {
    flex-direction: column;
    align-items: center;
  }

  .form-control {
    display: flex;
    margin-bottom: 15px;
    width: 100%;
  }

  .form-group label {
    display: none;
  }

  .bg-img img {
    max-width: 425px;
    margin-bottom: 15%;
  }

  .form-btn .btn {
    width: 200px;
  }

  .shortURL {
    margin-top: 20px;
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

@media screen and (max-width: 375px) {
  .bg-img img {
    max-width: 375px;
  }
}

@media screen and (max-width: 320px) {
  .bg-img img {
    max-width: 320px;
  }
}
</style>
