import React from 'react'

const App = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">
                Welcome to React with DaisyUI and Tailwind CSS!
            </h1>
            <p className="text-lg mb-2">
                This is a sample application using React, styled with Tailwind
                CSS and DaisyUI, built with Vite.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero et arcu luctus, nec eleifend nulla
                    tincidunt. Cras ullamcorper eros vitae nunc interdum, eget
                    cursus turpis congue. Donec ac urna sit amet ligula
                    sollicitudin laoreet.
                </p>
            </div>

            {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
            <footer className="mt-4 text-sm text-gray-600">
                Built with ❤️ using React, Tailwind CSS, DaisyUI, Vite,
                Prettier, and ESLint.
            </footer>

            {/* Description Rendered in JSX */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-2">
                    Description Rendered in `App.jsx`:
                </h2>
                <ul className="list-disc list-inside">
                    <li>
                        <strong>Vite for Build:</strong> Vite is a fast build
                        tool that provides instant server start and fast hot
                        module replacement (HMR).
                    </li>
                    <li>
                        <strong>Styling with Tailwind CSS and DaisyUI:</strong>{' '}
                        Tailwind CSS is a utility-first CSS framework for rapid
                        UI development. DaisyUI provides additional components
                        for Tailwind CSS.
                    </li>
                    <li>
                        <strong>Code Formatting with Prettier:</strong> Prettier
                        is used to maintain consistent code style automatically.
                    </li>
                    <li>
                        <strong>ESLint with Auto-Import Sorting:</strong> ESLint
                        is configured with the
                        `eslint-plugin-simple-import-sort` to ensure imports are
                        sorted automatically.
                    </li>
                </ul>
            </section>

            {/* Getting Started */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Getting Started:</h2>
                <ol className="list-decimal list-inside">
                    <li>
                        <strong>Clone the Repository:</strong>
                        <pre className="bg-gray-100 p-1 inline-block rounded mt-2">
                            git clone &lt;repository-url&gt;
                        </pre>
                    </li>
                    <li>
                        <strong>Install Dependencies:</strong>
                        <pre className="bg-gray-100 p-1 inline-block rounded mt-2">
                            npm install
                        </pre>
                    </li>
                    <li>
                        <strong>Run the Development Server:</strong>
                        <pre className="bg-gray-100 p-1 inline-block rounded mt-2">
                            npm run dev
                        </pre>
                        This command starts the Vite development server, and you
                        can view your React application in the browser.
                    </li>
                </ol>
            </section>

            {/* Code Quality and Formatting */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-2">
                    Code Quality and Formatting:
                </h2>
                <ul className="list-disc list-inside">
                    <li>
                        <strong>Format Code:</strong>
                        <pre className="bg-gray-100 p-1 inline-block rounded mt-2">
                            npm run format
                        </pre>
                        Uses Prettier to automatically format code according to
                        specified rules.
                    </li>
                    <li>
                        <strong>Lint Code:</strong>
                        <pre className="bg-gray-100 p-1 inline-block rounded mt-2">
                            npm run lint
                        </pre>
                        Uses ESLint to check for syntax errors, enforce coding
                        standards, and auto-sort imports.
                    </li>
                </ul>
            </section>

            {/* Contributing */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Contributing:</h2>
                <p>
                    Before submitting a pull request, ensure your code follows
                    the formatting and linting guidelines mentioned above.
                </p>
            </section>
        </div>
    )
}

export default App
