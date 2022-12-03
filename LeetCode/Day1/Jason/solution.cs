public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int outer = 0; outer < nums.Length; outer++)
        {
            for (int inner = 0; inner < nums.Length; inner++)
            {
                if (outer == inner)
                {
                    continue;
                }

                if (nums[outer] + nums[inner] == target)
                {
                    return new int[] {outer, inner};
                }
            }
        }

        return new int[0];
    }
}