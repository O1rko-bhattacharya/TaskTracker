export default function Footer() {
    return (
        <>
            <footer className="relative bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 bg-gradient-to-r from-sky-700 to-cyan-500 dark:border-gray-600">
                <span className="text-sm text-white sm:text-center dark:text-gray-400 hover:underline">© 2024 <a href="https://github.com/O1rko-bhattacharya">TaskTracker™</a>. All Rights Reserved.
                </span>
                <span>
                    <p className="text-white m-2">Icons by <a href="https://www.svgrepo.com/" className="hover:underline text-white">SVGrepo</a>,<a href="https://lordicon.com/"className="hover:underline text-white">Lordicons</a></p>
                </span>
            </footer>
        </>

    )
}
