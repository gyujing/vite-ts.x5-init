// export { }
// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $sexFormat: (key: number) => string
//     /**
//      * 如果只传一个参数，那么就是和当前时间比较
//      * @description: 计算两个日期相差天数
//      * @memberof ComponentCustomProperties
//      */
//     $diffDay: (date: string, data1?: string,) => number | string
//     /**
//      * 、如果只传一个参数，那么就是和当前时间比较
//      *  @description: 计算两个日期相差月数
//      * @memberof ComponentCustomProperties
//      */
//     $diffYear: (date: string, data1?: string,) => number | string
//   }
// }

declare global {
  interface Window {
    baseUrl: string;
  }
}
