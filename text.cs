using System;

namespace _5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("В конце предложения должен стоять знак препинания.");
            //string str = "Gосмотри туда, быстро ! ujnда? В сторону дороги. 1hyо...";
            Console.Write("Введите строку: ");
            string str = Console.ReadLine();

            if (str.Length > 200)
                str = str.Substring(0, 200);

            str = string.Join(" ", str.Split(new char[] { ' ' },
            StringSplitOptions.RemoveEmptyEntries));

            Console.WriteLine();
            Console.Write("Предложение с удаленными пробелами: ");
            Console.WriteLine(str);
            Console.WriteLine();

            string[] buffer = str.Split(" ");

            int first = 0;
            for (int i = 0; i < buffer.Length; i++)
            {
                string bukvaB = buffer[first];
                bukvaB = Char.ToUpper(bukvaB[0]) + bukvaB.Remove(0, 1);
                buffer[first] = bukvaB;
                if (buffer[i].IndexOf("!") != -1 || buffer[i].IndexOf("?") != -1 || buffer[i].IndexOf(".") != -1 || buffer[i].IndexOf("...") != -1 && i != buffer.Length - 1)
                {
                    first = i + 1;
                }
            }

            str = string.Join(" ", buffer);
            Console.Write("Строка с заглавными  буквами: ");
            Console.WriteLine(str);
            Console.WriteLine();

            /*Console.WriteLine("ИТОГОВАЯ СТРОКА ПОСЛЕ ВСЕХ ИЗМЕНЕНИЙ: ");
            Console.WriteLine(str);
            Console.WriteLine();
            */
            string buf = "";

            Console.WriteLine("             ИТОГ: ");

            for (int i = 0; i < buffer.Length - 1; i++)
            {


                if (buffer[i + 1] == ','.ToString() || buffer[i + 1] == '!'.ToString() || buffer[i + 1] == '?'.ToString() || buffer[i + 1] == "...".ToString() || buffer[i + 1] == '.'.ToString())
                {
                    Console.WriteLine(buffer[i] + buffer[i + 1]);
                    buf += buffer[i] + buffer[i + 1] + " ";
                    i++;
                    continue;
                }


                //Gосмотри туда, быстро ! ujnда? В сторону дороги. 1hyо...

                if (buffer[buffer.Length - 1] != ','.ToString() && buffer[buffer.Length - 1] != '!'.ToString() && buffer[buffer.Length - 1] != "...".ToString() && buffer[buffer.Length - 1] != '?'.ToString() && i == buffer.Length - 2)

                {
                    Console.WriteLine(buffer[buffer.Length - 2]);
                    buf += buffer[buffer.Length - 2] + " ";
                    Console.WriteLine(buffer[buffer.Length - 1]);
                    buf += buffer[buffer.Length - 1];
                }

                else
                {
                    Console.WriteLine(buffer[i]);
                    buf += buffer[i] + " ";
                }
            }
            Console.WriteLine();
            Console.WriteLine("СТРОКА ПОСЛЕ ВСЕХ ИЗМЕНЕНИЙ: ");
            Console.WriteLine(buf);
        }
    }
}