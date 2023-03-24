import HorizontalSlideShow from "./components/HorizontalSlideShow"

const slideItems = [
  {
    id: 1,
    imageUrl: 'https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/3-7.jpg',
    name: 'Iron kettle nambu tekki',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 154
  },
  {
    id: 2,
    imageUrl: 'https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/1-6.jpg',
    name: 'Freakish clock',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 105
  },
  {
    id: 3,
    imageUrl: 'https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/1-12.jpg',
    name: 'Odin Chair',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 420
  },
  {
    id: 4,
    imageUrl: 'https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/1-1.jpg',
    name: 'Ambit Pendant Lamp',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 190
  },
  {
    id: 5,
    imageUrl: 'https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/1-2.jpg',
    name: 'Animal Box Jewellery Box',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 79
  }
]

function App() {
  return (
    <div className="w-screen h-screen flex justify-center pt-20 overflow-hidden">
      <HorizontalSlideShow data={slideItems} />
    </div>
  );
}

export default App
