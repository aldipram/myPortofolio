import imgProfile from '../assets/img/profile2.png'
function Profile() {
    return ( 
        <>
            <section id='profile' className='bg-darkBackground my-20'>
                <div className='w-[80%] lg:h-[80vh] mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 text-white'>
                    <div className='my-8 flex flex-col gap-10 bg-slate-300 text-darkBackground rounded-xl overflow-hidden lg:w-1/2 lg:h-[55vh] lg:gap-18'>
                        <div className='flex flex-col items-center lg:mt-5'>
                            <div className='mb-5 lg:w-1/2 lg:rounded-xl lg:overflow-hidden'>
                                <img src={imgProfile} alt="" />
                            </div>
                            <div className='flex justify-center items-center gap-5 '>
                                <div className='flex flex-col items-center'>
                                    <p className='font-semibold'>20</p>
                                    <p className='text-slate-600'>Post</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='font-semibold'>250</p>
                                    <p className='text-slate-600'>Followers</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='font-semibold'>100</p>
                                    <p className='text-slate-600'>Following</p>
                                </div>
                            </div>
                        </div>
                            <div className='text-center mb-10'>
                                <a href="https://www.instagram.com/nandaaaldii/" target='_blank' rel='noreferrer' className='px-8 py-4 bg-brightColor rounded-full hover:bg-[#8482ff] hover:text-white transition-all'>
                                    Follow
                                </a>
                            </div>
                    </div>
                    {/* bagian profile */}
                    <div className='lg:w-1/2 flex flex-col justify-center items-center gap-5 mb-10'>
                        <h1 className='font-semibold text-2xl uppercase lg:text-3xl lg:mb-10 tracking-widest'>Profile</h1>
                        <ul className='flex flex-col text-base lg:text-xl text-slate-300 w-full'>
                            <li>Nama : Nanda Aldi Pramudya</li>
                            <li>Umur : 19</li>
                            <li>Alamat : Sukorame, Mangunan, Dlingo, Bantul, Yogyakarta</li>
                            <li>NO HP : 088232240609</li>
                            <li>Email : nandaaldi80@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Profile;