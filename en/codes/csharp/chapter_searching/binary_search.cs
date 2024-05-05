﻿/**
 * File: binary_search.cs
 * Created Time: 2022-12-23
 * Author: haptear (haptear@hotmail.com)
 */

namespace hello_algo.chapter_searching;

public class binary_search {
    /* Binary search (double closed interval) */
    int BinarySearch(int[] nums, int target) {
        // Initialize double closed interval [0, n-1], i.e., i, j point to the first element and last element of the array respectively
        int i = 0, j = nums.Length - 1;
        // Loop until the search interval is empty (when i > j, it is empty)
        while (i <= j) {
            int m = i + (j - i) / 2;   // Calculate midpoint index m
            if (nums[m] < target)      // This situation indicates that target is in the interval [m+1, j]
                i = m + 1;
            else if (nums[m] > target) // This situation indicates that target is in the interval [i, m-1]
                j = m - 1;
            else                       // Found the target element, thus return its index
                return m;
        }
        // Did not find the target element, thus return -1
        return -1;
    }

    /* Binary search (left closed right open interval) */
    int BinarySearchLCRO(int[] nums, int target) {
        // Initialize left closed right open interval [0, n), i.e., i, j point to the first element and the last element +1 of the array respectively
        int i = 0, j = nums.Length;
        // Loop until the search interval is empty (when i = j, it is empty)
        while (i < j) {
            int m = i + (j - i) / 2;   // Calculate midpoint index m
            if (nums[m] < target)      // This situation indicates that target is in the interval [m+1, j)
                i = m + 1;
            else if (nums[m] > target) // This situation indicates that target is in the interval [i, m)
                j = m;
            else                       // Found the target element, thus return its index
                return m;
        }
        // Did not find the target element, thus return -1
        return -1;
    }

    [Test]
    public void Test() {
        int target = 6;
        int[] nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];

        /* Binary search (double closed interval) */
        int index = BinarySearch(nums, target);
        Console.WriteLine("Index of target element 6 =" + index);

        /* Binary search (left closed right open interval) */
        index = BinarySearchLCRO(nums, target);
        Console.WriteLine("Index of target element 6 =" + index);
    }
}
