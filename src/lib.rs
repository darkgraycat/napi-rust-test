use napi_derive::napi;

#[napi]
pub fn add(a: f64, b: f64) -> f64 {
    a + b
}

#[napi]
pub fn substract(a: f64, b: f64) -> f64 {
    a - b
}

#[napi]
pub fn multiply(a: f64, b: f64) -> f64 {
    a * b
}

#[napi]
pub fn divide(a: f64, b: f64) -> f64 {
    a / b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2.0, 2.2);
        assert_eq!(result, 4.2);
    }
}
