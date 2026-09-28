import Link from "next/link";
import AuthButtons from "@/components/auth-buttons"; // หรือปุ่ม Login ของคุณ
import { getProducts } from "@/lib/products"; // ตัวอย่างการดึงข้อมูล

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 py-8">
      {/* Header / Navigation Bar */}
      <header className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">สินค้า</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            รายการสินค้าทั้งหมดพร้อมรายละเอียดและราคา
          </p>
        </div>
        <div>
          {/* ปุ่ม Sign In / Sign Out */}
          <AuthButtons />
        </div>
      </header>

      {/* Grid รายการสินค้า */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between p-6 bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                ฿{product.price.toLocaleString()}
              </span>
              <Link
                href={`/products/${product.id}/edit`}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                จัดการสินค้า
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}