/**
 * 认识vue文件，官网提供
 */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: defineComponent<{}, {}, any>
  export default component
}