// Product Best Sellers
import imgBestSeller2 from "../img/img-best-seller-2.jpg";
import imgBestSeller1 from "../img/img-best-seller-1.jpg";
import imgBestSeller4 from "../img/img-best-seller-4.jpg";
import imgBestSeller3 from "../img/img-best-seller-3.jpg";

// New Product
import imgNewProduct1 from "../img/new-product-1.jpg";
import imgNewProduct2 from "../img/new-product-2.jpg";
import imgNewProduct3 from "../img/new-product-3.jpg";
import imgNewProduct4 from "../img/new-product-4.jpg";

// Home img See More
import imgProduct2 from "../img/product/product-2.jpg";
import imgProduct3 from "../img/product/product-3.jpg";
import imgProduct5 from "../img/product/product-5.jpg";
import imgProduct6 from "../img/product/product-6.jpg";
import imgProduct8 from "../img/product/product-8.jpg";
import imgProduct9 from "../img/product/product-9.jpg";
import imgProduct10 from "../img/product/product-10.jpg";
import imgProduct11 from "../img/product/product-11.jpg";
import imgProduct7 from "../img/product/product-7.jpg";
import imgProduct13 from "../img/product/product-12.jpg";

//Juice Product
import juiceProduct1 from "../img/product/juice-product-1.jpg";
import juiceProduct2 from "../img/product/juice-product-2.jpg";
import juiceProduct4 from "../img/product/juice-product-4.jpg";
import juiceProduct5 from "../img/product/juice-product-5.jpg";
import juiceProduct6 from "../img/product/juice-product-6.jpg";
import juiceProduct7 from "../img/product/juice-product-7.jpg";
import juiceProduct8 from "../img/product/juice-product-8.jpg";
import juiceProduct9 from "../img/product/juice-product-9.jpg";
import juiceProduct10 from "../img/product/juice-product-10.jpg";

// Salad Product
import saladProduct1 from "../img/product/salad-product-1.jpg";
import saladProduct2 from "../img/product/salad-product-2.jpg";
import saladProduct3 from "../img/product/salad-product-3.jpg";
import saladProduct4 from "../img/product/salad-product-4.jpg";
import saladProduct5 from "../img/product/salad-product-5.jpg";
import saladProduct6 from "../img/product/salad-product-6.jpg";
import saladProduct7 from "../img/product/salad-product-7.jpg";
import saladProduct8 from "../img/product/salad-product-8.jpg";
import saladProduct9 from "../img/product/salad-product-9.jpg";
import saladProduct10 from "../img/product/salad-product-10.jpg";
import saladProduct11 from "../img/product/salad-product-11.jpg";

const dataProducts = [
  {
    id: "01",
    productName: "Apple",
    imgUrl: imgBestSeller2,
    group: "bestSeller",
    category: "fruit",
    price: "55.000",
    weight: "1 Kg: 3-5 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
  },
  {
    id: "02",
    productName: "Strawberry",
    imgUrl: imgBestSeller1,
    group: "bestSeller",
    category: "fruit",
    price: "35.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus.",
    delayAos: 200,
  },
  {
    id: "03",
    productName: "Orange",
    imgUrl: imgBestSeller3,
    group: "bestSeller",
    category: "fruit",
    price: "56.000",
    weight: "1 Kg: 4-6 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in.",
    delayAos: 400,
  },
  {
    id: "04",
    productName: "Sunkist Orange",
    imgUrl: imgBestSeller4,
    group: "bestSeller",
    category: "fruit",
    price: "34.000",
    weight: "1 Kg: 5-8 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur soluta quis in repellat atque quos sint.",
    delayAos: 550,
  },
  {
    id: "05",
    productName: "Mango Juice",
    imgUrl: imgNewProduct1,
    group: "newProduct",
    category: "juice",
    price: "34.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "06",
    productName: "Avocado Juice",
    imgUrl: imgNewProduct2,
    group: "newProduct",
    category: "juice",
    price: "23.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto nemo neque aliquid ad similique beatae, mollitia sunt blanditiis a..",
    delayAos: 200,
  },
  {
    id: "07",
    productName: "Fruit Salad",
    imgUrl: imgNewProduct3,
    group: "newProduct",
    category: "salad",
    price: "37.500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt quod sunt nemo velit dignissimos, adipisci voluptatem voluptatibus minima officia quis modi dolores repellendus illum sapiente iure quisquam cum, nesciunt laudantium cupiditate est! Saepe, facilis?",
    delayAos: 400,
  },
  {
    id: "08",
    productName: "Guava Juice",
    imgUrl: imgNewProduct4,
    group: "newProduct",
    category: "juice",
    price: "23.000",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex dolor iste asperiores earum voluptatum, qui molestiae aut impedit alias corporis perspiciatis ab.",
    delayAos: 550,
  },

  {
    id: "09",
    productName: "Aplle Red",
    imgUrl: imgProduct9,
    group: "seeMorePorduct",
    category: "fruit",
    price: "69.000",
    weight: "1 Kg: 3-5 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur, fugiat perspiciatis cumque iste quaerat laborum numquam suscipit mollitia dolor, error repellat id enim velit, ea non nostrum ab soluta accusamus. Asperiores, quasi!",
  },
  {
    id: "10",
    productName: "Juice Orance Drink",
    imgUrl: juiceProduct1,
    group: "seeMorePorduct",
    category: "juice",
    price: "34.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque dolorum. Exercitationem expedita blanditiis nesciunt aspernatur, tempore hic voluptates quos voluptatibus? Perspiciatis expedita, molestias debitis hic et cum nesciunt. Commodi ea dolore explicabo nobis ipsa repellat, illum consequatur deserunt quaerat. Neque pariatur accusamus minima ab!.",
    delayAos: 200,
  },
  {
    id: "11",
    productName: "Orance Fresh",
    imgUrl: imgProduct10,
    group: "seeMorePorduct",
    category: "fruit",
    price: "67.000",
    weight: "1 Kg: 4-7 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minus ipsum sit?",
    delayAos: 400,
  },
  {
    id: "12",
    productName: "Salad ",
    imgUrl: saladProduct1,
    group: "seeMorePorduct",
    category: "salad",
    price: "28.000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sequi libero at id voluptatibus veritatis totam autem nemo enim qui esse, sint eius! Consequuntur, molestiae nam autem beatae impedit enim at. Consectetur?",
    delayAos: 550,
  },
  {
    id: "13",
    productName: "Anggur black muscat",
    imgUrl: imgProduct5,
    group: "seeMorePorduct",
    category: "fruit",
    price: "55.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde, nisi repellendus ad incidunt veritatis quisquam consectetur doloribus! Aliquid accusamus laborum saepe accusantium a porro ea atque beatae voluptates vero!",
  },
  {
    id: "14",
    productName: "vegetable salad",
    imgUrl: saladProduct10,
    group: "seeMorePorduct",
    category: "salad",
    price: "34.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis facere consequuntur aliquam expedita quae dolores ipsum in accusantium similique ratione nemo nulla tempora quia earum perspiciatis quos, tempore veniam impedit ullam harum. Necessitatibus quia ea harum consectetur fugit eligendi quasi voluptates veritatis hic ab.",
    delayAos: 200,
  },
  {
    id: "15",
    productName: "Wine",
    imgUrl: imgProduct2,
    group: "seeMorePorduct",
    category: "fruit",
    price: "55.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iure molestiae ut facere officia, sint animi accusantium, eius tenetur nostrum laborum?",
    delayAos: 400,
  },
  {
    id: "16",
    productName: "lemons",
    imgUrl: imgProduct3,
    group: "seeMorePorduct",
    category: "fruit",
    price: "23.000",
    weight: "1 Kg: 4-7 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi autem voluptatum neque delectus fugit exercitationem dignissimos commodi? Porro doloremque soluta mollitia doloribus ipsum numquam, odit accusamus dignissimos voluptate quod blanditiis repudiandae autem inventore nam maiores minima. Dicta praesentium, maxime ullam totam rerum necessitatibus?",
    delayAos: 550,
  },
  {
    id: "17",
    productName: "Red Apple",
    imgUrl: imgProduct6,
    category: "fruit",
    price: "43.000",
    weight: "1 Kg: 3-5 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas porro quos quisquam, optio nisi quibusdam. Commodi alias doloremque, quidem obcaecati quisquam voluptas earum ullam adipisci, consequatur, dolor nostrum explicabo pariatur a provident vitae ex cupiditate facilis soluta sunt nisi quod deserunt eligendi modi! Consequuntur, minima maiores unde mollitia labore corporis dicta suscipit distinctio.",
  },
  {
    id: "18",
    productName: "pineapple",
    imgUrl: imgProduct8,
    category: "fruit",
    price: "34.000",
    weight: "1 Kg: 2-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde repellendus animi libero, praesentium sint, quos sequi eius modi a, harum id autem iste tempore. Ducimus, itaque unde distinctio enim eum aperiam!",
    delayAos: 200,
  },
  {
    id: "19",
    productName: "Sweet Charlie",
    imgUrl: imgProduct11,
    category: "fruit",
    price: "78.000",
    weight: "1 Kg: 15-30 Unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id voluptas officia sequi quam accusantium.",
    delayAos: 400,
  },
  {
    id: "20",
    productName: "cherry",
    imgUrl: imgProduct7,
    category: "fruit",
    price: "58.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id voluptas officia sequi quam accusantium.",
    delayAos: 550,
  },
  {
    id: "21",
    productName: "Melon",
    imgUrl: imgProduct13,
    category: "fruit",
    price: "15.000",
    weight: "1 kg: 1-2 unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
  },
  // Data Product Salad
  {
    id: "22",
    productName: "Salad Cherry And Strawberry",
    imgUrl: saladProduct2,
    category: "salad",
    price: "34.000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam atque eos, nesciunt in earum iste hic iure natus numquam voluptatem quia alias ea omnis nam ducimus commodi? Sapiente est tempora autem.",
    delayAos: 200,
  },
  {
    id: "23",
    productName: "Salad Strawberry",
    imgUrl: saladProduct3,
    category: "salad",
    price: "18.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 400,
  },
  {
    id: "24",
    productName: "Salad With Cherry",
    imgUrl: saladProduct4,
    category: "salad",
    price: "10.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi quos sint.",
    delayAos: 550,
  },
  {
    id: "25",
    productName: "Delicious Salad Bestie",
    imgUrl: saladProduct5,
    category: "salad",
    price: "44.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta ue quos sint.",
  },
  {
    id: "26",
    productName: "Nice Salad",
    imgUrl: saladProduct6,
    category: "salad",
    price: "23.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laboriosam..",
    delayAos: 200,
  },
  {
    id: "27",
    productName: "Salad Orance and Strawberry",
    imgUrl: saladProduct7,
    category: "salad",
    price: "67.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 400,
  },
  {
    id: "28",
    productName: "Delicious Salad Bestie",
    imgUrl: saladProduct8,
    category: "salad",
    price: "110.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 550,
    delayAos: 550,
  },
  {
    id: "29",
    productName: "Salad Mood",
    imgUrl: saladProduct9,
    category: "salad",
    price: "44.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
  },
  {
    id: "30",
    productName: "Sweet Salad",
    imgUrl: saladProduct11,
    category: "salad",
    price: "70.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 200,
  },
  // Product Jucie
  {
    id: "31",
    productName: "Juice Drink Glass With Orance ",
    imgUrl: juiceProduct2,
    category: "juice",
    price: "35.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 400,
  },
  {
    id: "33",
    productName: "Juice Orance Plastic cup",
    imgUrl: juiceProduct4,
    category: "juice",
    price: "12.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 550,
  },
  {
    id: "34",
    productName: "Juice Chilled With Lemon",
    imgUrl: juiceProduct5,
    category: "juice",
    price: "77.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
  },
  {
    id: "35",
    productName: "Drink Glass With Strawberry",
    imgUrl: juiceProduct6,
    category: "juice",
    price: "50.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 200,
  },
  {
    id: "36",
    productName: "Cafeteria Juice",
    imgUrl: juiceProduct7,
    category: "juice",
    price: "15.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 400,
  },
  {
    id: "37",
    productName: "Glass Lime Juice",
    imgUrl: juiceProduct8,
    category: "juice",
    price: "30.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 550,
  },
  {
    id: "38",
    productName: "lime juice",
    imgUrl: juiceProduct9,
    category: "juice",
    price: "26.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
  },
  {
    id: "39",
    productName: "Juice Berries Glass",
    imgUrl: juiceProduct10,
    category: "juice",
    price: "25.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus voluptate animi pariatur soluta quis in repellat atque quos sint.",
    delayAos: 300,
  },
];

export default dataProducts;
