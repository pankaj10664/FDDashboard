import logo from "../logo.svg"
// Navbar.jsx
const Navbar = () => {
    return (
        <header className="bg-white py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-13" />
                </div>

                <div className="flex items-center">
                    <nav className="hidden md:flex space-x-6 items-center">
                        <a href="/dashboard" className="text-gray-800 hover:text-blue-600 transition-colors">Dashboard</a>
                        <a href="/faqs" className="text-gray-800 hover:text-blue-600 transition-colors">FAQs</a>
                        <a href="/support" className="text-gray-800 hover:text-blue-600 transition-colors">Support</a>
                    </nav>
                    <button className="flex items-center border border-indigo-600 text-indigo-600  px-4 ml-10 rounded-full">
                        <svg className="fill-current w-16 h-12 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#4A4ED4">
                            <path d="M10 10a5 5 0 100-10 5 5 0 000 10zm0 2c-2.5 0-7.5 1.25-7.5 3.75V18h15v-2.25c0-2.5-5-3.75-7.5-3.75z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#4A4ED4">
                            <path fill-rule="evenodd" d="M5 8l5 5 5-5H5z" clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>
            </div>

            <div className="md:hidden">
                <button className="text-gray-800 hover:text-blue-600">

                </button>
            </div>
        </header>
    );
};

export default Navbar;
