(module
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$v (func))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "wasmFib" (func $assembly/index/wasmFib))
 (export "wasmRecursiveFib" (func $assembly/index/wasmRecursiveFib))
 (func $assembly/index/wasmFib (; 0 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  i32.const 1
  local.set $1
  loop $repeat|0
   block $break|0
    local.get $2
    local.get $0
    i32.ge_s
    br_if $break|0
    local.get $1
    local.get $3
    i32.add
    local.set $4
    local.get $1
    local.set $3
    local.get $4
    local.set $1
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $repeat|0
   end
  end
  local.get $1
 )
 (func $assembly/index/wasmRecursiveFib (; 1 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.le_s
  if (result i32)
   local.get $0
  else   
   local.get $0
   i32.const 1
   i32.sub
   call $assembly/index/wasmRecursiveFib
   local.get $0
   i32.const 2
   i32.sub
   call $assembly/index/wasmRecursiveFib
   i32.add
  end
 )
 (func $null (; 2 ;) (type $FUNCSIG$v)
  nop
 )
)
