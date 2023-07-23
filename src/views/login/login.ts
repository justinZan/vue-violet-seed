import { Vue, Component } from 'vue-property-decorator';
import { validateByEmail } from '@/utils/validate';

@Component
export default class Login extends Vue {
  loading = false;
  loginForm = {
    email: '1105503089@qq.com',
    password: '123456'
  };
  loginRules = {
    email: [{ required: true, trigger: 'blur', validator: this.validateEmail }],
    password: [{ required: true, trigger: 'blur', validator: this.validatePass }]
  };

  public handleLogin() {
    const lForm: any = this.$refs.loginForm;
    lForm.validate((valid: any) => {
      if (valid) {
        this.loading = true;
        this.$store
          .dispatch('Login', this.loginForm)
          .then(() => {
            this.loading = false;
            this.$router.push({ path: '/' });
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  public validateEmail(rule: any, value: any, callback: any) {
    if (!validateByEmail(value)) {
      callback(new Error('请输入正确的合法邮箱'));
    } else {
      callback();
    }
  }
  public validatePass(rule: any, value: any, callback: any) {
    if (value.length < 6) {
      callback(new Error('密码不能小于6位'));
    } else {
      callback();
    }
  }
}
