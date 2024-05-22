const promises = (): Promise<string> => {
 const learnJs: Promise<string> = new Promise((resolve, reject) => {
   console.log('I am learning Js');
   setTimeout(() => {
     resolve('I have learned Js');
   }, 1000);
 });

 return learnJs;
};
export default promises;