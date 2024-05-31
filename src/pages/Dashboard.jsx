import { useState } from "react";
import { Settings, MenuIcon, LogOutIcon } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Replace with your table component
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Dashboard() {
  const [workers] = useState([
    {
      id: 1,
      name: "Blaise DEPLO",
      image: "/test/photo.png",
      position: "Manager",
      ste: "/test/img.png",
      gloves: 2,
      glasses: 11,
      earProtection: 10,
      maskProtection: 1,
      kneePads: 3,
      safetyShoes: 1,
      coverall: 3,
      hiVisJacket: 1,
      safetyHarness: 1,
      faceShield: 1,
      hardHat: 7,
      weldingHelmet: 3,
    },
    {
      id: 2,
      name: "John Doe",
      image: "/test/photo.png",
      position: "Worker",
      ste: "/test/img.png",
      gloves: 5,
      glasses: 6,
      earProtection: 3,
      maskProtection: 2,
      kneePads: 2,
      safetyShoes: 2,
      coverall: 2,
      hiVisJacket: 1,
      safetyHarness: 0,
      faceShield: 1,
      hardHat: 5,
      weldingHelmet: 2,
    },
    {
      id: 3,
      name: "Jane Smith",
      image: "/test/photo.png",
      position: "Worker",
      ste: "/test/img.png",
      gloves: 3,
      glasses: 4,
      earProtection: 2,
      maskProtection: 1,
      kneePads: 1,
      safetyShoes: 1,
      coverall: 2,
      hiVisJacket: 1,
      safetyHarness: 0,
      faceShield: 1,
      hardHat: 3,
      weldingHelmet: 1,
    },
    {
      id: 4,
      name: "Alice Johnson",
      image: "/test/photo.png",
      position: "Supervisor",
      ste: "/test/img.png",
      gloves: 4,
      glasses: 7,
      earProtection: 5,
      maskProtection: 3,
      kneePads: 2,
      safetyShoes: 2,
      coverall: 3,
      hiVisJacket: 2,
      safetyHarness: 1,
      faceShield: 2,
      hardHat: 6,
      weldingHelmet: 3,
    },
    {
      id: 5,
      name: "Michael Williams",
      image: "/test/photo.png",
      position: "Worker",
      ste: "/test/img.png",
      gloves: 3,
      glasses: 3,
      earProtection: 2,
      maskProtection: 1,
      kneePads: 1,
      safetyShoes: 1,
      coverall: 2,
      hiVisJacket: 1,
      safetyHarness: 0,
      faceShield: 1,
      hardHat: 3,
      weldingHelmet: 1,
    },
    {
      id: 6,
      name: "Emily Brown",
      image: "/test/photo.png",
      position: "Worker",
      ste: "/test/img.png",
      gloves: 2,
      glasses: 3,
      earProtection: 2,
      maskProtection: 1,
      kneePads: 1,
      safetyShoes: 1,
      coverall: 2,
      hiVisJacket: 1,
      safetyHarness: 0,
      faceShield: 1,
      hardHat: 3,
      weldingHelmet: 1,
    },
    {
      id: 7,
      name: "Daniel Wilson",
      image: "/test/photo.png",
      position: "Worker",
      ste: "/test/img.png",
      gloves: 3,
      glasses: 3,
      earProtection: 2,
      maskProtection: 1,
      kneePads: 1,
      safetyShoes: 1,
      coverall: 2,
      hiVisJacket: 1,
      safetyHarness: 0,
      faceShield: 1,
      hardHat: 3,
      weldingHelmet: 1,
    },
    {
      id: 8,
      name: "Sarah Taylor",
      image: "/test/photo.png",
      position: "Worker",
      ste: "/test/img.png",
      gloves: 2,
      glasses: 3,
      earProtection: 2,
      maskProtection: 1,
      kneePads: 1,
      safetyShoes: 1,
      coverall: 2,
      hiVisJacket: 1,
      safetyHarness: 0,
      faceShield: 1,
      hardHat: 3,
      weldingHelmet: 1,
    },
  ]);

  const renderPPECount = (count) => {
    if (count === 0) {
      return "-";
    }

    const className =
      count < 10
        ? "bg-yellow-500 text-white px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center"
        : "bg-red-500 text-white px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center";

    return <div className={className}>{count}</div>;
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row overflow-x-hidden">
      <div
        className={`bg-white dark:bg-zinc-800 p-4 z-10 border-2 flex flex-col justify-between ${
          isOpen ? "w-64" : "w-16"
        } flex-shrink-0`}
      >
        <div>
          <div className="flex items-center mb-6">
            {isOpen ? (
              <div className="flex items-center">
                <img src="/test/logo.png" alt="Logo" className="mr-3" />
                <button onClick={() => setIsOpen(false)} className="mr-3">
                  <MenuIcon className="h-6 w-6 text-black" />
                </button>
              </div>
            ) : (
              <img src="/test/logoh.png" alt="Logo2" className="mr-3" />
            )}
          </div>

          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
                >
                  <img
                    src="/test/Vector (3).png"
                    alt="Dashboard Icon"
                    className="mr-3"
                  />
                  <span className={isOpen ? "block" : "hidden"}>Dashboard</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 p-2 rounded"
                >
                  <img
                    src="/test/front_hand.png"
                    alt="PPE Violations Icon"
                    className="mr-3 border-1"
                  />
                  <span className={isOpen ? "block" : "hidden"}>
                    PPE Violations
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-6">
            <h2
              className={`text-zinc-600 dark:text-zinc-400 mb-2 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              MANAGE
            </h2>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
                >
                  <img
                    src="/test/Vector (2).png"
                    alt="PPEs Icon"
                    className="mr-3"
                  />
                  <span className={isOpen ? "block" : "hidden"}>PPEs</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
                >
                  <img
                    src="/test/Vector.png"
                    alt="Contractors Icon"
                    className="mr-3"
                  />
                  <span className={isOpen ? "block" : "hidden"}>
                    Contractors
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded"
                >
                  <img
                    src="/test/VectorZ.png"
                    alt="Workers Icon"
                    className="mr-3"
                  />
                  <span className={isOpen ? "block" : "hidden"}>Workers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`text-zinc-500 dark:text-zinc-400 text-sm ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p>© App name 2021</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <header className="flex h-16 items-center justify-between px-6 shadow-md dark:bg-gray-950">
          <div className="flex items-center">
            {isOpen ? null : (
              <button
                className="mr-2"
                size="icon"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <MenuIcon className="h-6 w-6 text-black" />
              </button>
            )}

            <span className="text-lg font-semibold">Overview</span>
          </div>
        <div className="flex items-center justify-between space-x-8">
          <div>
          <button className="p-6 space-x-4 relative">
              <img  src="/test/A.png"className="absolute top-2" />
              <img  src="/test/size.png" className="absolute top-2" />
            </button>
          <button className="p-4">
              <img  src="/test/moon.png" />
            </button>
            <button className="p-4">
              <img   src="/test/notification.png" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>

            <button className="p-4">
              <img   src="/test/english.png" />
            </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
              <DropdownMenuItem>
                <img src="/test/english.png" />
              <h2 className="text-[#313131] px-2">English{"(EN)"}</h2>
              </DropdownMenuItem>
              <DropdownMenuItem>
               <img src="/test/france.png" />
              <h2 className="text-[#ADADAD] px-2">Français{"(FR)"}</h2>
              </DropdownMenuItem>
              <DropdownMenuItem>
               <img src="/test/nederlands.png" />
              <h2 className="text-[#ADADAD] px-2">Nederlands{"(NL)"}</h2>
              </DropdownMenuItem>
              <DropdownMenuItem>
               <img src="/test/spain.png" />
              <h2 className="text-[#ADADAD] px-2">Espanol{"(ES)"}</h2>
              </DropdownMenuItem>
              <DropdownMenuItem>
               <img src="/test/germany.png" />
              <h2 className="text-[#ADADAD] px-2">Deutsch{"(DE)"}</h2>
              </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <img
                  alt="User Avatar"
                  className="rounded-full"
                  height={32}
                  src="/test/Ellipse 1.png"
                  style={{ aspectRatio: "1", objectFit: "cover" }}
                  width={32}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <h2>BESIX Group</h2>
                <p>besix.group@besix.be</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <img src="/test/seetingsIcon.png" className="mr-2 h-4 w-4" />
                Profile settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <img src="/test/Vector (4).png" className="mr-2 h-4 w-4" />
                Our policies
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </header>

        <div className="flex-1 flex flex-col">
          {/* Navigation Tabs */}
          <div className="flex items-center p-2 border-b">
            <span className="font-semibold">SITES</span>
            <div className="flex items-center space-x-4 ml-4">
              <button className="text-blue-500">All</button>
              <button className="text-zinc-500">Site 1</button>
              <button className="text-zinc-500">Site 2</button>
              <button className="text-zinc-500">Site 3</button>
              <button className="text-zinc-500">Site 4</button>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-4 w-full overflow-x-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">PPE Violations Table</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search workers..."
                  className="border rounded p-2 w-60 h-8"
                />
                <select className="border rounded p-2 w-40 h-10">
                  <option>All Contractors</option>
                </select>
              </div>
            </div>
            <div className="border shadow-sm rounded-lg overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="rounded-full"
                            size="icon"
                            variant="ghost"
                          >
                            <Settings />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-56" hidden>
                          <DialogTitle>
                            <p className="text-sm">Select columns to display</p>
                          </DialogTitle>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Protective gloves</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Safety glasses</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Ear protection</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Mask protection</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Knee pads</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Safety shoes</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Coverall</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Hi-Vis Jacket</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Safety Harness</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Face shield</label>
                            </div>

                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm"> Hard hat</label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <label className="ml-3 text-sm">Welding helmet</label>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableHead>
                    <TableHead className="text-center border-l border-r">
                      Workers
                    </TableHead>
                    {/* Adjust width or set min-width for columns to prevent overflow */}
                    <TableHead className="text-center mt-4 min-w-[120px]">
                      <div className="flex flex-col items-center my-4">
                        <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center">
                          <img
                            src="/test/1.png"
                            alt="Worker"
                            className="w-[90px] h-[90px]"
                          />
                        </div>
                        <span className="text-sm pt-2"> Protective gloves</span>
                      
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center my-4">
                        <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center ">
                          <img
                            src="/test/2.png"
                            alt="Worker"
                            className="w-[90px] h-[97.67px]"
                          />
                        </div>
                        <span className="text-sm pt-2"> 
                        Safety glasses
                        </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200  rounded-sm w-[80px] h-[86px] flex justify-center items-center">
                        <img
                          src="/test/3.png"
                          alt="Worker"
                          className="w-[90px] h-[97.67px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                      Ear protection
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center my-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center ">
                        <img
                          src="/test/4.png"
                          alt="Worker"
                          className="w-[100px] h-[108.52px]"
                        />
                      </div>
                      <span className="text-sm pt-2">
                      Mask protection
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center ">
                        <img
                          src="/test/5.png"
                          alt="Worker"
                          className="w-[88px] h-[109px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                      Knee pads
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center">
                        <img
                          src="/test/6.png"
                          alt="Worker"
                          className="w-[88px] h-[109px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                      Safety shoes
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center ">
                        <img
                          src="/test/7.png"
                          alt="Worker"
                          className="w-[100px] h-[108.52px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                      Coverall
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center">
                        <img
                          src="/test/8.png"
                          alt="Worker"
                          className="w-[80px] h-[79.81px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                      Hi-Vis Jacket
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px] relative">
                    <div className="flex flex-col items-center my-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center ">
                        <img
                          src="/test/9.png"
                          alt="Worker"
                          className="w-[80px] h-[108.82px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                        Safety Harness
                        </span>
                        </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px] relative">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center relative ">
                        <img
                          src="/test/111.png"
                          alt="Worker"
                          className="absolute w-[73px] h-[78px] bottom-4 right-4"
                        />
                        <img
                          src="/test/112.png"
                          alt="Safety Glasses"
                          className="absolute w-[70px] h-[76px] top-6 left-4"
                        />
                      </div>
                      <span className="text-sm pt-3">
                        Face shield
                        </span>
                        </div>
                    </TableHead>

                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center ">
                        <img
                          src="/test/12.png"
                          alt="Worker"
                          className="w-[100px] h-[108.52px]"
                        />
                      </div>
                      <span className="text-sm pt-3">
                      Hard hat
                      </span>
                      </div>
                    </TableHead>
                    <TableHead className="mt-4 text-center min-w-[120px]">
                    <div className="flex flex-col items-center my-4">
                      <div className="bg-gray-200 rounded-sm w-[80px] h-[86px] flex justify-center items-center">
                        <img
                          src="/test/13.png"
                          alt="Worker"
                          className="w-[100px] h-[108.52px]"
                        />
                      </div>
                      <span className="text-sm pt-2">
                      Welding helmet
                      </span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workers.map((worker) => (
                    <TableRow key={worker.id}>
                      <TableCell>{worker.id}</TableCell>
                      <TableCell className="w-56 flex flex-row justify-around items-center border-l border-r">
                        <img
                          src={worker.image}
                          alt="Worker"
                          className="rounded-full w-8 h-8 mr-2"
                        />
                        <div>
                          <div>{worker.name}</div>
                          <div className="text-sm text-zinc-500">
                            {worker.position}
                          </div>
                        </div>
                        <img
                          src={worker.ste}
                          alt="Worker"
                          className="w-8 h-8"
                        />
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        <Dialog >
                          <DialogTrigger>
                            {renderPPECount(worker.gloves)}
                          </DialogTrigger>
                          <DialogContent className="w-[400px] h-[556px] overflow-auto">
                            <div className="bg-white w-full rounded-lg ">
                              <img
                               className="w-full h-48  rounded-sm object-cover"
                                src="/test/baseball-glove-safety-gloves-personal-protective-equipment-cutresistant-gloves-welding-hand-disposable-sports-gear-png-clipart-removebg-preview 1.png"
                                alt="Construction worker"
                              />
                              <div className="w-full py-4">
                                <p className="text-sm text-zinc-600 ">
                                  Comment
                                </p>
                                <div className="flex items-center text-xs text-[#313131] mt-1">
                                  <span className="mr-2">📅</span>
                                  <span>15/11/2022 10:34</span>
                                  <span className="ml-auto">#003</span>
                                </div>
                                <p className="mt-2 px-2  text-[#313131] text-sm bg-[#E1E1E1] rounded-sm">
                                  consectetur adipiscing elit, do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                  adipiscingdo eiusmod tempor incididunt labore
                                </p>
                              </div>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                              <img
                                className="w-full h-48  rounded-sm object-cover"
                                src="/test/baseball-glove-safety-gloves-personal-protective-equipment-cutresistant-gloves-welding-hand-disposable-sports-gear-png-clipart-removebg-preview 1 (1).png"
                                alt="Construction site"
                              />
                                 <div className="w-full py-4">
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                  Comment
                                </p>
                                <div className="flex items-center text-xs text-zinc-500 mt-1">
                                  <span className="mr-2">📅</span>
                                  <span>15/11/2022 10:34</span>
                                  <span className="ml-auto">#007</span>
                                </div>
                                <p className="mt-2 px-4  text-[#313131] text-sm bg-[#E1E1E1] rounded-sm">
                                  consectetur adipiscing elit, do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                  adipiscingdo eiusmod tempor incididunt labore
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.glasses)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.earProtection)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.maskProtection)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.kneePads)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.safetyShoes)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.coverall)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.hiVisJacket)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.safetyHarness)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.faceShield)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.hardHat)}
                      </TableCell>
                      <TableCell className="pl-8 text-center">
                        {renderPPECount(worker.weldingHelmet)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
