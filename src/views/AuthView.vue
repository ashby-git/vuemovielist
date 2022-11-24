<template>
  <div class="PageBreak" />
  <section class="AuthFormContainer">
    <h1 class="FormTitle">{{ isLogin ? "Login" : "Sign Up" }}</h1>
    <form @submit.prevent="onSubmit">
      <div class="FormContent">
        <label class="FormContent label" htmlFor="email">Your Email</label>
        <input
          class="FormContent input"
          type="email"
          id="email"
          required
          v-model="email"
        />
      </div>
      <div class="FormContent">
        <label class="FormContent label" htmlFor="password"
          >Your Password</label
        >
        <input
          class="FormContent input"
          type="password"
          id="password"
          required
          v-model="password"
        />
      </div>
      <div class="Actions">
        <button class="FormButton" type="submit">
          {{ isLogin ? "Login" : "Create Account" }}
        </button>
        <!-- )} {isLoading && <LoadingSpinner />} -->
        <button
          class="FormButtonToggle"
          type="button"
          @click="isLogin = !isLogin"
        >
          {{ isLogin ? "Create new account" : "Login with existing account" }}
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default {
  name: "AuthView",
  data() {
    return {
      email: "",
      password: "",
      isLogin: true,
    };
  },
  methods: {
    onSubmit() {
      if (this.isLogin) {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            alert("Successfully logged in!");
            this.$router.push("/profile");
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            alert("Successfully registered!");
            this.$router.push("/profile");
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    },
  },
};
</script>

<style scoped>
.PageBreak {
  padding: 80px 0 0 0;
}
.AuthFormContainer {
  margin: 3rem auto;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  color: white;
}
.FormTitle {
  text-align: center;
  color: white;
  margin-bottom: 1rem;
}
.FormContent {
  margin-bottom: 0.5rem;
}
.FormContent.label {
  display: block;
  color: white;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.FormContent.input {
  font: inherit;
  background-color: #f1e1fc;
  color: #38015c;
  border-radius: 4px;
  border: 1px solid white;
  width: 100%;
  text-align: left;
  padding: 0.25rem;
  box-sizing: border-box;
}
.Actions {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.FormButton {
  cursor: pointer;
  font: inherit;
  color: white;
  background-color: #9f5ccc;
  border: 1px solid #9f5ccc;
  border-radius: 4px;
  padding: 0.5rem 2.5rem;
}
.FormButton:hover {
  background-color: #873abb;
  border-color: #873abb;
}
.FormButtonToggle {
  margin-top: 1rem;
  background-color: transparent;
  color: #9f5ccc;
  border: none;
  padding: 0.15rem 1.5rem;
  cursor: pointer;
}
.FormButtonToggle:hover {
  background-color: transparent;
  color: #ae82cc;
}
</style>
