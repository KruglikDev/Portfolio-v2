import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/*<div className="relative" id='home'>*/}
            <Spline scene="https://prod.spline.design/WqAqUDqtpxB9lX9h/scene.splinecode" />
        {/*</div>*/}
    </div>
  );
}

export default App;