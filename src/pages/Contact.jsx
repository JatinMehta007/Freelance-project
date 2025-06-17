
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Question } from "../lib/action/question";
import toast, { Toaster } from "react-hot-toast";
// const defaultFormState = {
//   name: {
//     value: "",
//     error: "",
//   },
//   email: {
//     value: "",
//     error: "",
//   },
//   message: {
//     value: "",
//     error: "",
//   },
// };

export const Contact = () => {
//   const [formData, setFormData] = useState(defaultFormState);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       // Call server action
//       const response = await Question({
//         name: formData.name.value,
//         email: formData.email.value,
//         message: formData.message.value,
//       });

//       console.log(response);

//       // Show success notification
//       toast.success("Your question has been submitted successfully!");

//       // Navigate to home page after a delay
//       setTimeout(() => {
//         router.push("/");
//       }, 2000);
//     } catch (error) {
//       console.error("Error while adding question entry:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

  return (
        <div className="p-10" id="contact">
        <p className="text-6xl font-black text-center font-playfair">Contact us</p>
            
        <p className="text-center text-lg text-zinc-600 p-4 font-gentium">Reach out to us over email or fill up this contact form. We will get back to you ASAP - We promise.</p>
    <div className="flex justify-center items-center " >
      {/* Toaster for notifications */}
      <Toaster />
      <form className="form" >

        <div className="flex  flex-col md:flex-row w-[900px] justify-between gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            // value={formData.name.value}
            onChange={(e) => {
                setFormData({
                    ...formData,
                    name: {
                        value: e.target.value,
                        error: "",
                    },
                });
            }}
            />
          <input
            type="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            // value={formData.email.value}
            onChange={(e) => {
                setFormData({
                    ...formData,
                    email: {
                        value: e.target.value,
                        error: "",
                    },
                });
            }}
            />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={10}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            // value={formData.message.value}
            onChange={(e) => {
                setFormData({
                    ...formData,
                    message: {
                        value: e.target.value,
                        error: "",
                    },
                });
            }}
            />
        </div>
        <button
          className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500 hover:text-sky-500"
          type="submit"
          >
          Submit
        </button>
      </form>
            </div>
    </div>
  );
};