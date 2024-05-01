import React, { useState } from "react";
import ApiCaller from "../components/services/ApiCaller";

const ViewMain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <section className="bg-gray-900 text-white">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="">
          <div>
            <ApiCaller setData={setData} setLoading={setLoading} />
            <div className="">
              {/* Renderiza los datos obtenidos del endpoint */}
              {loading && <p>Cargando...</p>}
              {!loading && data && (
                <div className="">
                  <h1 className="text-3xl font-bold sm:text-4xl">
                    Datos del endpoint:
                  </h1>
                  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => (
                      <div
                        key={item.id}
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-400/10 hover:shadow-pink-400/10"
                      >
                        <h2 className="mt-4 text-xl font-bold text-white">
                          Elemento {item.id}
                        </h2>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.bot_sender}{" "}
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.business_id}{" "}
                        </p>
                        <span className="mt-1 text-sm text-gray-300">
                          {item.message_date}
                        </span>
                        <h3 className="mt-1 text-base text-gray-100">
                          {item.message_text}
                        </h3>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.platform}
                        </p>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.sender_number}
                        </p>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.received_number}
                        </p>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.reply_to_id}
                        </p>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.sender_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewMain;
