/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */
// 1 კომენტარები
/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/
// 2 ცვლადები
/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/
// >>>> კოდი დაწერეთ აქ
let name="bla"
let lastname="bla"
let age1=89
const date_of_birth=1930
const birth_place="samtredia"
// 
/*
  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.
 // წიგნების მაღაზიის მაგალითი:
  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;
*/
// >>>> კოდი დაწერეთ აქ
const music_name="calipso 101"
const author="killages"
const song_duration="3.28minute"
//
// 3 მონაცემთა ტიპები
/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/
let age = 1;
let hisName = "bob"
let isHigh = true;
const dateOfBirth = 1995
// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს
// თქვენი მიზანია დააბრუნოთ პირველი 4 frue
console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")
// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი
// მაგ: console.log(typeof age)
console.log(typeof age)
console.log(typeof hisName)
console.log(typeof isHigh)
console.log(typeof dateOfBirth)
// ოპერატორები არითმეტიკა
let num = 5;
// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა
// >>> კოდი დაწერეთ აქ
let c;
c=num**2
c=num+3
c=num*2
//
console.log(c)
// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი
// >>> კოდი დაწერეთ აქ
let st="56"
let numb=1
console.log(+st +numb)
//