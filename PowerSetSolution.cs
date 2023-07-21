using System.Collections.Generic;
using System.Linq;

class PowerSetSolution
{
    public List<List<int>> PowerSet(int[] nums)
    {
        List<List<int>> result = new List<List<int>> { new List<int>() };

        foreach (int num in nums)
        {
            int n = result.Count;
            for (int i = 0; i < n; i++)
            {
                List<int> subset = new List<int>(result[i]);
                subset.Add(num);
                result.Add(subset);
            }
        }

        return result;
    }
}