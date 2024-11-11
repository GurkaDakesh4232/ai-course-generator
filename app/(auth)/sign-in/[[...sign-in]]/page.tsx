import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Background"
            src={'/signin.avif'}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              {/* Logo SVG */}
              <svg className="h-8 sm:h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Path content */}
                <path
                  d="M0.41 10.3847C1.14777 7.4194..."
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to AI-Courses 🦑
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
            The page prominently displays a "Sign In" heading at the top, guiding the user to understand that this is the page where they can log in to their account
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg className="h-8 sm:h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Path content */}
                  <path
                    d="M0.41 10.3847C1.14777 7.4194..."
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div className="mt-12 space-y-4">
              <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
