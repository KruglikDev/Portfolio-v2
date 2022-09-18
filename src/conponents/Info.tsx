import me from '../me.jpg';

const Info = () => {
    return (
        <main className='w-[80%] mt-5'>
            <section
                className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24'
                id='about'
            >
                <div className='w-full h-420 flex items-center justify-center'>
                    <div className='w-275 h-340 bg-blue-200 rounded-md relative'>
                        <img
                            className='shadow-lg w-full h-full absolute -right-4 top-4 object-cover rounded-lg'
                            src={me}
                            alt="Andrey Kruglik"
                        />
                    </div>
                </div>

                <div className='w-full h-420 flex flex-col items-center justify-center'>
                    <p className='text-lg text-textBase text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam dignissimos
                        facilis illo inventore nostrum omnis placeat suscipit totam. Architecto expedita illum impedit,
                        minus obcaecati possimus sint? Alias atque, beatae cum, cumque deserunt dicta dolor doloremque
                        dolores eligendi esse est eum explicabo, fugiat in incidunt iure iusto magni maiores
                        necessitatibus nesciunt nobis nostrum officiis porro possimus tempore voluptatem voluptates.
                    </p>

                    <button
                        className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span
                    className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Info;