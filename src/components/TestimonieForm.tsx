import { useAddTestimonieMutation } from "@services/testimonies/api";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FormEvent, useState } from "react";
import { useInputText } from "@hooks/useInputText";
import { toast } from "react-toastify";
import Rating from "./Rating";

const TestimonieForm = () => {
  const [name, onChangeName, onSetName] = useInputText("");
  const [description, onChangeDescription, onSetDescription] = useInputText("");
  const [rating, setRating] = useState<number>(0);
  const [success, setSuccess] = useState(false);
  const [addTesti] = useAddTestimonieMutation();

  const onSubmitTestimonie = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    const data = {
      client_name: name,
      description: description,
      rating: rating,
    };
    const response = await addTesti(data);
    if (response.data?.success) {
      setSuccess(true);
      onSetName("");
      onSetDescription("");
      return;
    }
    return toast.error((response.error as any).data.message);
  };

  const onRatingChange = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="w-full bg-blue h-[100vh] py-4 flex items-center justify-center">
      <div className="w-full lg:w-[600px] bg-white rounded-md py-4 px-6 mx-2">
        {success ? (
          <div className="text-center">
            <IoMdCheckmarkCircleOutline size={150} className="text-green-800 mx-auto mb-4" />
            <h1 className="text-4xl text-blue font-bold mb-4">Terima Kasih</h1>
            <a href={`${window.location.origin}`} className="text-xl underline text-orange font-semibold mb-4">
              Kembali ke Home
            </a>
          </div>
        ) : (
          <>
            <h1 className="text-2xl text-blue font-bold mb-4">Form Penilaian Layanan DLN Tech</h1>
            <p className="leading-6 mb-4">
              Terima kasih sudah menggunakan jasa pembuatan website dan aplikasi dari{" "}
              <a href={`${window.location.origin}`} className="text-orange font-semibold">
                DLN Tech.
              </a>{" "}
              Senang dapat membantu Anda untuk menyelesaikan website dan teknologi yang ingin dibuat. Sampai bertemu di project selanjutnya. 😊😊
            </p>
            <form className="w-full" onSubmit={onSubmitTestimonie}>
              <div className="w-full mb-4">
                <label htmlFor="name" className="mb-2 block">
                  Nama / Instansi
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-blue"
                  placeholder="John Doe / PT xxx"
                  value={name}
                  onChange={onChangeName}
                />
              </div>
              <div className="w-full mb-4">
                <label htmlFor="desc" className="mb-2 block">
                  Deskripsi Pengalaman
                </label>
                <textarea
                  id="desc"
                  className="w-full border border-slate-400 p-2 rounded-md outline-none focus:ring-1 focus:ring-blue"
                  rows={7}
                  value={description}
                  onChange={onChangeDescription}></textarea>
              </div>
              <div className="w-full mb-4">
                <label htmlFor="rating" className="mb-2 block">
                  Rating
                </label>
                <Rating initialRating={rating} onRatingChange={onRatingChange} />
              </div>
              <div className="w-full mb-4">
                <button className="w-full text-center bg-blue text-white py-2 px-3 rounded-md hover:bg-opacity-80 transition-all duration-300 ease-in-out">
                  Kirim Penilaian
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonieForm;
