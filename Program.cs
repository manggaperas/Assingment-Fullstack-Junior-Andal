using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        PowerSetSolution solution = new PowerSetSolution();
        int[] nums1 = { 1, 2, 3 };
        List<List<int>> subsets1 = solution.PowerSet(nums1);

        Console.WriteLine("Power Set for nums1:");
        PrintSubsets(subsets1);

        int[] nums2 = { 4, 5 };
        List<List<int>> subsets2 = solution.PowerSet(nums2);

        Console.WriteLine("Power Set for nums2:");
        PrintSubsets(subsets2);

        int[] nums3 = { 6, 7 };
        List<List<int>> subsets3 = solution.PowerSet(nums3);

        Console.WriteLine("Power Set for nums3:");
        PrintSubsets(subsets3);

        int[] nums4 = { };
        List<List<int>> subsets4 = solution.PowerSet(nums4);

        Console.WriteLine("Power Set for nums4:");
        PrintSubsets(subsets4);
    }

    static void PrintSubsets(List<List<int>> subsets)
    {
        foreach (List<int> subset in subsets)
        {
            Console.Write("[");
            Console.Write(string.Join(", ", subset));
            Console.WriteLine("]");
        }
        Console.WriteLine();
    }
}


