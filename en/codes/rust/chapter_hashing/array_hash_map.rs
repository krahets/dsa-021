/**
 * File: array_hash_map.rs
 * Created Time: 2023-2-18
 * Author: xBLACICEx (xBLACKICEx@outlook.com)
 */

/* Key-value pair */
#[derive(Debug, Clone, PartialEq)]
pub struct Pair {
    pub key: i32,
    pub val: String,
}
/* Hash table based on array implementation */
pub struct ArrayHashMap {
    buckets: Vec<Option<Pair>>,
}

impl ArrayHashMap {
    pub fn new() -> ArrayHashMap {
        // Initialize an array, containing 100 buckets
        Self {
            buckets: vec![None; 100],
        }
    }

    /* Hash function */
    fn hash_func(&self, key: i32) -> usize {
        key as usize % 100
    }

    /* Query operation */
    pub fn get(&self, key: i32) -> Option<&String> {
        let index = self.hash_func(key);
        self.buckets[index].as_ref().map(|pair| &pair.val)
    }

    /* Add operation */
    pub fn put(&mut self, key: i32, val: &str) {
        let index = self.hash_func(key);
        self.buckets[index] = Some(Pair {
            key,
            val: val.to_string(),
        });
    }

    /* Remove operation */
    pub fn remove(&mut self, key: i32) {
        let index = self.hash_func(key);
        // Set to None, representing removal
        self.buckets[index] = None;
    }

    /* Get all key-value pairs */
    pub fn entry_set(&self) -> Vec<&Pair> {
        self.buckets
            .iter()
            .filter_map(|pair| pair.as_ref())
            .collect()
    }

    /* Get all keys */
    pub fn key_set(&self) -> Vec<&i32> {
        self.buckets
            .iter()
            .filter_map(|pair| pair.as_ref().map(|pair| &pair.key))
            .collect()
    }

    /* Get all values */
    pub fn value_set(&self) -> Vec<&String> {
        self.buckets
            .iter()
            .filter_map(|pair| pair.as_ref().map(|pair| &pair.val))
            .collect()
    }

    /* Print hash table */
    pub fn print(&self) {
        for pair in self.entry_set() {
            println!("{} -> {}", pair.key, pair.val);
        }
    }
}

fn main() {
    /* Initialize hash table */
    let mut map = ArrayHashMap::new();
    /*Add operation */
    // Add key-value pair (key, value) to the hash table
    map.put(12836, "Ha");
    map.put(15937, "Luo");
    map.put(16750, "Suan");
    map.put(13276, "Fa");
    map.put(10583, "Ya");
    println!("\nAfter adding, the hash table is\nKey -> Value");
    map.print();

    /* Query operation */
    // Enter key to the hash table, get value
    let name = map.get(15937).unwrap();
    println!("\nInput student ID 15937, found name {}", name);

    /* Remove operation */
    // Remove key-value pair (key, value) from the hash table
    map.remove(10583);
    println!("\nAfter removing 10583, the hash table is\nKey -> Value");
    map.print();

    /* Traverse hash table */
    println!("\nTraverse key-value pairs Key->Value");
    for pair in map.entry_set() {
        println!("{} -> {}", pair.key, pair.val);
    }

    println!("\nIndividually traverse keys Key");
    for key in map.key_set() {
        println!("{}", key);
    }

    println!("\nIndividually traverse values Value");
    for val in map.value_set() {
        println!("{}", val);
    }
}
